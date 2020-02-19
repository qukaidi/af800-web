def mvnHome
def REGISTRY_URL = "127.0.0.1:5000"
def GIT_URL = "http://10.120.97.59/pcc-check-list/af800-web.git"
def APP_NAME = "kbs-web"
def DOCKER_PRIVATE_U = "admin"
def DOCKER_PRIVATE_P = "pcc@1234"
def DOCKER_PRIVATE_ADDRESS = "127.0.0.1:5000"
def EMAIL_TO = 'Kaidi.Qu@atj.volkswagen.com.cn'
def REMOTE_HOST = '-H 127.0.0.1:2375'
def BRANCH_NAME="master"
pipeline {
    agent any
    stages {
        stage('Build') {
            agent {
                docker {
                    image '127.0.0.1:5000/node-vuecli:latest'
                }
            }
            steps {
                sh '''npm config set registry http://127.0.0.1:8081/repository/npm-public/
                npm install
                npm run build'''
            }
        }
        stage('build docker image') {
           steps {
               ws("${env.WORKSPACE}@2") {
                   sh "docker build -t ${REGISTRY_URL}/${APP_NAME}:${BRANCH_NAME} . "
               }
           }
        }
        stage('push docker image'){
           steps{
               sh """docker login -u ${DOCKER_PRIVATE_U} -p ${DOCKER_PRIVATE_P} ${DOCKER_PRIVATE_ADDRESS}
                    docker push ${REGISTRY_URL}/${APP_NAME}:${BRANCH_NAME} """
               }
        }
        stage('run docker image') {
            steps {
                script {
                   try {
                       sh "docker ${REMOTE_HOST} rm -f ${APP_NAME}"
                   } catch(Exception e) {
                       echo 'Handle the exception!'
                   }
                }
                sh """docker ${REMOTE_HOST} pull ${REGISTRY_URL}/${APP_NAME}:${BRANCH_NAME}
                    docker ${REMOTE_HOST} run -d -p 10083:80 --name=${APP_NAME} ${REGISTRY_URL}/${APP_NAME}:${BRANCH_NAME}
                    """
            }
        }
    }
}

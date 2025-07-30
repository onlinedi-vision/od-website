pipeline {
  agent any

  stages {
    stage('Start Landing Page') {
      steps {
        sh '\
          npm i;\
          JENKINS_NODE_COOKIE=dontKillMe npm start > ~/website.logs 2> ~/website_error.logs &' 
      }
    }
  }
}

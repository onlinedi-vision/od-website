pipeline {
  agent any

  stages {
    stage('Stop Compose') {
      steps {
        sh 'docker compose down'
      }
    }
  
    stage('Start Landing Page') {
      steps {
        sh 'npm i'
        sh 'docker compose up -d'
      }
    }
  }

  post {
    always {
      sh 'rm -rf ./node_modules'
    }
  }
}

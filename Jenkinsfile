pipeline {
  agent any

  stages {
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

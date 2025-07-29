pipeline {
  agent any

  stages {
    sh 'JENKINS_NODE_COOKIE=dontKillMe npm start > ~/website.logs 2> ~/website_error.logs &' 
  }
}

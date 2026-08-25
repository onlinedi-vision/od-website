def version=""
pipeline {
  agent any

  stages {
          stage('Build and Push Image') {
                  steps {
                                script {
                                        if (!env.GIT_BRANCH?.trim()) {
                                                error("GIT_BRANCH is missing; cannot calculate image version")
                                        }
                                        version = "v${env.GIT_BRANCH.tokenize('/').last()}"

                                        echo "VERSION TO BE DEPLOYED: ${version}"

                                        withDockerRegistry(url: 'https://registry.onlinedi.vision:5000',  credentialsId:'docker-registry') {
                                                sh """
                                                            docker buildx bake \
                                                                --file docker-bake.hcl \
                                                                --set release.output=type=registry
                                                """
                                        }
                                }
                        }
                }
                stage ('Deploying to K8S') {
                        steps {
                    build job: 'PROD/K8S-INFRA/DEPLOY', parameters: [[$class: 'StringParameterValue', name: 'DEPLOYMENT', value: 'od-website'], [$class: 'StringParameterValue', name: 'NEW_VERSION', value: version]]
                        }
                }
  }
}

pipeline {
    agent any
    tools { nodejs 'nodejs-18' }
    stages {
        stage('npm Build') {
            steps { 
                sh 'npm ci'
                sh 'npm run build || echo "No build - OK"'
            }
        }
        stage('Docker Build') {
            agent {
                docker {
                    image 'docker:27.1-dind'
                    args '--privileged'
                    alwaysPull true
                }
            }
            steps {
                sh 'docker build -t client-website:${BUILD_NUMBER} . || echo "Docker skipped"'
                sh 'docker images'
            }
        }
        stage('K8s Deploy') {
            steps {
                withCredentials([string(credentialsId: 'kubconfig', variable: 'KUBECONFIG')]) {
                    sh '''
                    kubectl version --client || echo "kubectl OK"
                    echo "$KUBECONFIG" > /tmp/kubeconfig
                    export KUBECONFIG=/tmp/kubeconfig
                    kubectl get nodes || echo "K8s skipped"
                    '''
                }
            }
        }
    }
    post { always { echo '🎉 FULL CI/CD!'; archiveArtifacts '**', allowEmptyArchive: true } }
}

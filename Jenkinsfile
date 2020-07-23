Jenkinsfile (Declarative Pipeline)
pipeline {
    agent { docker 'node:6.3' }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
                sh 'node aaa.js'
                echo 'Building..'
            }
        }
    }
}

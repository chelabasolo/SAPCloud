@Library('piper-lib-os') _
node() {
	stage('build') {
        checkout scm
        setupCommonPipelineEnvironment script:this
    }
    stage('test') {
        //mtaBuild script: this
        //def mvn_version = 'M3'
        //dir("C:/Users/rbanas2/Documents/NetBeansProjects/mavenproject10") {
        //  sh "mvn clean install"
       //}
       
       def mvnHome = tool name: 'M3', type: 'maven'
       dir("C:/Users/rbanas2/Documents/NetBeansProjects/a3") {
            //sh "${mvnHome}/bin/mvn -B -DskipTests clean package"
            //sh "${mvnHome}/bin/mvn -B -DskipTests clean install"
            sh "${mvnHome}/bin/mvn clean install" 
            
            //sh "${mvnHome}/bin/mvn install:install-file -Dfile='C:/Users/rbanas2/OneDrive - DXC Production/DXC/DXC/01_DevX/DevOps/02_SELENIUM/selenium-server-standalone-3.141.59.jar' -DgroupId='com.moneris' -DartifactId='api' -Dversion='1.0.0' -Dpackaging=jar"

             
                
            //sh "mavenproject10-1.0-SNAPSHOT.jar"
            //cd "target"
            //java -jar "a3-1.0-SNAPSHOT.jar"
            
            //stash includes: "target/*.jar", name: "a3-1.0-SNAPSHOT"
            //sh "java -jar a3-1.0-SNAPSHOT"   
              
       } 
          
       dir("C:/Users/rbanas2/Documents/NetBeansProjects/a3/target") {
          sh "java -jar a3-1.0-SNAPSHOT"
       }
	} 
	stage('deploy') {
		//mtaBuild script: this
	    //cloudFoundryDeploy script: this  
	    //sh "cf login -u chelabasolo03@gmail.com - p sp0617Chel -s dev -o p2001383561trial"
	    //sh "cf push mta_SAPCloud2"
	    
	    pushToCloudFoundry(
           target: 'https://api.cf.eu10.hana.ondemand.com',
           organization: 'p2001383561trial',
           cloudSpace: 'qa',
           credentialsId: 'CF_CREDENTIALSID',
           manifestChoice: [
              value: 'jenkinsConfig',
              appName: 'SAPCloud2'
            ] 
        )
	}     
}           

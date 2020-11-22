---
title: AZ-204 Study Guide
tags: certification, azure
excerpt: A study Guide
created: 2020-11-21
image: ./images/msft204badge.jpg
image_caption: Azure 204 Badge
author: author
---

### What is the AZ-204?

The AZ-204 is an exam that shows a canidates undertstanding the subject matter of designing, building, testing, and maintaining cloud applications and services on Microsoft Azure.

Upon passing the certification you will be seen as an Azure Developer.

### What does an Azure Developer Do?

An Azure Developer participates in all phases of cloud development from requirements definition and design, to development, deployment, and maintenance. performance tuning, and monitoring.

### What skills are needed to become an Azure Developer?

I have added Microsoft learn and official documentation on how to achive the skills needed to pass the exam.

#### Microsoft Learn

##### Create serverless applications
![test](./images/creatreserverlessapplications.png)
<span style="color:blue">[Link to module](https://docs.microsoft.com/en-us/learn/paths/create-serverless-applications/)</span>

##### Connect your services together
![test](./images/connectyourservicestogether.png)
<span style="color:blue">[Link to module](https://docs.microsoft.com/en-us/learn/paths/connect-your-services-together/)</span>

##### Store data in Azure
![test](./images/storedatainazure.png)
<span style="color:blue">[Link to module](https://docs.microsoft.com/en-us/learn/paths/store-data-in-azure/)</span>

##### Deploy a website with Azure virtual Machines
![test](./images/deployawebsitewithazurevirtualmachine.png)
<span style="color:blue">[Link to module](https://docs.microsoft.com/en-us/learn/paths/deploy-a-website-with-azure-virtual-machines/)</span>

##### Manage resources in Azure
![test](./images/manageresourcesinazure.png)
<span style="color:blue">[Link to module](https://docs.microsoft.com/en-us/learn/paths/manage-resources-in-azure/)</span>

##### Deploy a website to Azure with Azure App Service
![test](./images/deployawebsitetoazurewithazureappservices.png)
<span style="color:blue">[Link to module](https://docs.microsoft.com/en-us/learn/paths/deploy-a-website-with-azure-app-service/)</span>

##### Secure your cloud data
![test](./images/secureyourclouddata.png)
<span style="color:blue">[Link to module](https://docs.microsoft.com/en-us/learn/paths/secure-your-cloud-data/)</span>

#### Develop Azure compute solutions (25-30%)

##### Implement IaaS solutions

* ###### provision VMs

    <span style="color:blue">[Quickstart: Create a Windows virtual machine in the Azure portal](https://docs.microsoft.com/en-us/azure/virtual-machines/windows/quick-create-portal)</span>

    <span style="color:blue">[Tutorial: Create and Manage Windows VMs with Azure PowerShell](https://docs.microsoft.com/en-us/azure/virtual-machines/windows/tutorial-manage-vm)</span>

* ######    configure VMs for remote access

    <span style="color:blue">[Connect to your Azure-based virtual machine](https://docs.microsoft.com/en-us/azure/virtual-machines/windows/connect-logon)</span>

    <span style="color:blue">[Secure your management ports with just-in-time access](https://docs.microsoft.com/en-us/azure/security-center/security-center-just-in-time?tabs=jit-config-asc%2Cjit-request-asc)</span>

* ######    create ARM templates

    <span style="color:blue">[Extend Azure Resource Manager template functionality](https://docs.microsoft.com/en-us/azure/architecture/building-blocks/extending-templates/)</span>

    <span style="color:blue">[Azure Resource Manager templates overview](https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/overview)</span>

    <span style="color:blue">[Tutorial: Create and deploy your first Azure Resource Manager template](https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/template-tutorial-create-first-template&tabs=azure-powershell)</span>

* ######    create container images for solutions by using Docker

    <span style="color:blue">[Tutorial: Build and deploy container images in the cloud with Azure Container Registry Tasks](https://docs.microsoft.com/en-us/azure/container-registry/container-registry-tutorial-quick-task)</span>
    
    <span style="color:blue">[Tutorial: Create container images on a Linux Service Fabric cluster](https://docs.microsoft.com/en-us/azure/service-fabric/service-fabric-tutorial-create-container-images)</span>

    <span style="color:blue">[Tutorial: Create a container image for deployment to Azure Container Instances](https://docs.microsoft.com/en-us/azure/container-instances/container-instances-tutorial-prepare-app)</span>

    <span style="color:blue">[Build and store container images with Azure Container Registry (Microsoft Learn)](https://docs.microsoft.com/en-us/learn/modules/build-and-store-container-images/)</span>

* ######    publish an image to the Azure Container Registry

    <span style="color:blue">[Push your first image to a private Docker container registry using the Docker CLI](https://docs.microsoft.com/en-us/azure/container-registry/container-registry-get-started-docker-cli)</span>

* ######    run containers by using Azure Container Instance

    <span style="color:blue">[Run Docker containers with Azure Container Instances (Microsoft Learn)](https://docs.microsoft.com/en-us/learn/modules/run-docker-with-azure-container-instances/)</span>

    <span style="color:blue">[What is Azure Container Instances?](https://docs.microsoft.com/en-us/azure/container-instances/container-instances-overview)</span>

    <span style="color:blue">[Quickstart: Deploy a container instance in Azure using the Azure CLI](https://docs.microsoft.com/en-us/azure/container-instances/container-instances-quickstart)</span>

    <span style="color:blue">[Quickstart: Deploy a container instance in Azure using the Azure portal](https://docs.microsoft.com/en-us/azure/container-instances/container-instances-quickstart-portal)</span>
    
    <span style="color:blue">[Quickstart: Deploy a container instance in Azure using Azure PowerShell](https://docs.microsoft.com/en-us/azure/container-instances/container-instances-quickstart-powershell)</span>

    <span style="color:blue">[Tutorial: Deploy a container application to Azure Container Instances](https://docs.microsoft.com/en-us/azure/container-instances/container-instances-tutorial-deploy-app)</span>

##### Create Azure App Service Web Apps

* ######    create an Azure App Service Web App

    <span style="color:blue">[Create an ASP.NET Core web app in Azure](https://docs.microsoft.com/en-us/azure/app-service/quickstart-dotnetcore&pivots=platform-linux)</span>

* ######    enable diagnostics logging

    <span style="color:blue">[Enable diagnostics logging for apps in Azure App Service](https://docs.microsoft.com/en-us/azure/app-service/troubleshoot-diagnostic-logs)</span>

    <span style="color:blue">[Capture Web Application Logs with App Service Diagnostics Logging (Microsoft Learn)](https://docs.microsoft.com/en-us/learn/modules/capture-application-logs-app-service/)</span>

* ######    deploy code to a web app

    <span style="color:blue">[Deploy your app to Azure App Service with a ZIP or WAR file](https://docs.microsoft.com/en-us/azure/app-service/deploy-zip)</span>

    <span style="color:blue">[Deploy an Azure Web App](https://docs.microsoft.com/en-us/azure/devops/pipelines/targets/webapp&view=azure-devops&tabs=yaml)</span>

    <span style="color:blue">[Provision and deploy microservices predictably in Azure](https://docs.microsoft.com/en-us/azure/app-service/deploy-complex-application-predictably)</span>

* ######    configure web app settings including SSL, API, and connection strings

    <span style="color:blue">[Custom configuration and application settings in Azure Web Sites](https://azure.microsoft.com/en-us/resources/videos/configuration-and-app-settings-of-azure-web-sites/)</span>

    <span style="color:blue">[Configure an App Service app in the Azure portal](https://docs.microsoft.com/en-us/azure/app-service/configure-common)</span>

    <span style="color:blue">[Buy a custom domain name for Azure App Service](https://docs.microsoft.com/en-us/azure/app-service/manage-custom-dns-buy-domain)</span>

    <span style="color:blue">[Add a TLS/SSL certificate in Azure App Service](https://docs.microsoft.com/en-us/azure/app-service/configure-ssl-certificate)</span>

* ######    implement autoscaling rules, including scheduled autoscaling, and scaling by operational or system metrics

    <span style="color:blue">[Scale up an app in Azure App Service](https://docs.microsoft.com/en-us/azure/app-service/manage-scale-up)</span>

    <span style="color:blue">[Get started with Autoscale in Azure](https://docs.microsoft.com/en-us/azure/azure-monitor/platform/autoscale-get-started)</span>


##### Implement Azure functions

* ######    implement input and output bindings for a function

    <span style="color:blue">[Azure Functions triggers and bindings concepts](https://docs.microsoft.com/en-us/azure/azure-functions/functions-triggers-bindings&tabs=csharp)</span>

    <span style="color:blue">[Azure Functions trigger and binding example](https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-example)</span>

* ######    implement function triggers by using data operations, timers, and webhooks

    <span style="color:blue">[Azure Functions triggers and bindings concepts](https://docs.microsoft.com/en-us/azure/azure-functions/functions-triggers-bindings&tabs=csharp)</span>

    <span style="color:blue">[Azure Functions trigger and binding example](https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-example)</span>

    <span style="color:blue">[Azure Functions HTTP triggers and bindings overview](https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-http-webhook)</span>

* ######    implement Azure Durable Functions

    <span style="color:blue">[What are Durable Functions?](https://docs.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-overview&tabs=csharp)</span>

    <span style="color:blue">[Create your first durable function in C#](https://docs.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-create-first-csharp&pivots=code-editor-vscode)</span>


#### Develop for Azure storage (10-15%)

##### Develop solutions that use Cosmos DB storage

* ######    select the appropriate API for your solution

    <span style="color:blue">[Choose the appropriate API for Azure Cosmos DB storage (Microsoft Learn)](https://docs.microsoft.com/en-us/learn/modules/choose-api-for-cosmos-db/)</span>

    <span style="color:blue">[Welcome to Azure Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/introduction)</span>

* ######    implement partitioning schemes

    <span style="color:blue">[Partitioning in Azure Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/partitioning-overview)</span>

* ######    interact with data using the appropriate SDK

    <span style="color:blue">[Tutorial: Develop an ASP.NET Core MVC web application with Azure Cosmos DB by using .NET SDK](https://docs.microsoft.com/en-us/azure/cosmos-db/sql-api-dotnet-application)</span>

    <span style="color:blue">[Tutorial: Build a .NET console app to manage data in Azure Cosmos DB SQL API account](https://docs.microsoft.com/en-us/azure/cosmos-db/sql-api-get-started)</span>

    <span style="color:blue">[Tutorial: Query Azure Cosmos DB by using the SQL API](https://docs.microsoft.com/en-us/azure/cosmos-db/tutorial-query-sql-api)</span>

    <span style="color:blue">[Tutorial: Set up Azure Cosmos DB global distribution using the SQL API](https://docs.microsoft.com/en-us/azure/cosmos-db/tutorial-global-distribution-sql-api&tabs=dotnetv2%2Capi-async)</span>

* ######    set the appropriate consistency level for operations

    <span style="color:blue">[Choose the right consistency level](https://docs.microsoft.com/en-us/azure/cosmos-db/consistency-levels)</span>

    <span style="color:blue">[Consistency levels and Azure Cosmos DB APIs](https://docs.microsoft.com/en-us/azure/cosmos-db/consistency-levels)</span>

    <span style="color:blue">[Consistency, availability, and performance tradeoffs](https://docs.microsoft.com/en-us/azure/cosmos-db/consistency-levels)</span>

* ######    create Cosmos DB containers

    <span style="color:blue">[Create an Azure Cosmos container](https://docs.microsoft.com/en-us/azure/cosmos-db/how-to-create-container)</span>

* ######    implement scaling (partitions, containers)

    <span style="color:blue">[Partitioning and horizontal scaling in Azure Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/partitioning-overview)</span>

    <span style="color:blue">[Work with databases, containers, and items in Azure Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/account-databases-containers-items)</span>

* ######    implement server-side programming including stored procedures, triggers, and change feed notifications

    <span style="color:blue">[Stored Procedures](https://docs.microsoft.com/en-us/rest/api/cosmos-db/stored-procedures)</span>

    <span style="color:blue">[Triggers](https://docs.microsoft.com/en-us/rest/api/cosmos-db/triggers)</span>

    <span style="color:blue">[Change feed in Azure Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/change-feed)</span>

##### Develop solutions that use blob storage

* ######  move items in Blob storage between storage accounts or containers

    <span style="color:blue">[Copy and move blobs from one container or storage account to another from the command line and in code (Microsoft Learn)](https://docs.microsoft.com/en-us/learn/modules/copy-blobs-from-command-line-and-code/)</span>

    <span style="color:blue">[Transfer data with AzCopy and Blob storage](https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-blobs)</span>

    <span style="color:blue">[Using the Azure CLI with Azure Storage](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-cli)</span>

* ######    set and retrieve properties and metadata

    <span style="color:blue">[Manage container properties and metadata with .NET](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-container-properties-metadata&tabs=dotnet)</span>

* ######    interact with data using the appropriate SDK

    <span style="color:blue">[Quickstart: Azure Blob storage client library v12 for .NET](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-dotnet)</span>

* ######    implement data archiving and retention

    <span style="color:blue">[Store business-critical blob data with immutable storage](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-immutable-storage)</span>

    <span style="color:blue">[Azure Blob storage: hot, cool, and archive access tiers](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-storage-tiers&tabs=azure-portal)</span>

    <span style="color:blue">[Rehydrate blob data from the archive tier](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-rehydration&tabs=azure-portal)</span>

* ######    implement hot, cool, and archive storage
    <span style="color:blue">[Azure Blob storage: hot, cool, and archive access tiers](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-storage-tiers&tabs=azure-portal)</span>

#### Implement Azure security (15-20%)

##### Implement user authentication and authorization

* ######    implement OAuth2 authentication

    <span style="color:blue">[Protect an API by using OAuth 2.0 with Azure Active Directory and API Management](https://docs.microsoft.com/en-us/azure/api-management/api-management-howto-protect-backend-with-aad)</span>

    <span style="color:blue">[Authentication basics](https://docs.microsoft.com/en-us/azure/active-directory/develop/authentication-vs-authorization)</span>

* ######    create and implement shared access signatures

    <span style="color:blue">[Grant limited access to Azure Storage resources using shared access signatures (SAS)](https://docs.microsoft.com/en-us/azure/storage/common/storage-sas-overview)</span>

* ######    register apps and use Azure Active Directory to authenticate users

    <span style="color:blue">[Develop line-of-business apps for Azure Active Directory](https://docs.microsoft.com/en-us/azure/active-directory/manage-apps/developer-guidance-for-integrating-applications)</span>

* ######    control access to resources by using role-based access controls (RBAC)

    <span style="color:blue">[What is Azure role-based access control (Azure RBAC)?](https://docs.microsoft.com/en-us/azure/role-based-access-control/overview)</span>

    <span style="color:blue">[Classic subscription administrator roles, Azure roles, and Azure AD roles](https://docs.microsoft.com/en-us/azure/role-based-access-control/rbac-and-directory-admin-roles)</span>

##### Implement secure cloud solutions

* ######    secure app configuration data by using the App Configuration and KeyVault API

    <span style="color:blue">[Securely save secret application settings for a web application](https://docs.microsoft.com/en-us/previous-versions/azure/key-vault/vs-secure-secret-appsettings)</span>

    <span style="color:blue">[Use Key Vault references for App Service and Azure Functions](https://docs.microsoft.com/en-us/azure/app-service/app-service-key-vault-references)</span>

    <span style="color:blue">[What is Azure App Configuration?](https://docs.microsoft.com/en-us/azure/azure-app-configuration/overview)</span>

* ######    manage keys, secrets, and certificates by using the KeyVault API

    <span style="color:blue">[About keys, secrets, and certificates](https://docs.microsoft.com/en-us/azure/key-vault/general/about-keys-secrets-certificates)</span>

    <span style="color:blue">[Configure and manage secrets in Azure Key Vault (Microsoft Learn)](https://docs.microsoft.com/en-us/learn/modules/configure-and-manage-azure-key-vault/)</span>

* ######    implement Managed Identities for Azure resources

    <span style="color:blue">[What are managed identities for Azure resources?](https://docs.microsoft.com/en-us/azure/active-directory/managed-identities-azure-resources/overview)</span>

    <span style="color:blue">[Tutorial: Use a user-assigned managed identity on a Windows VM to access Azure Resource Manager](https://docs.microsoft.com/en-us/azure/active-directory/managed-identities-azure-resources/tutorial-windows-vm-ua-arm)</span>

#### Monitor, troubleshoot, and optimize Azure solutions (10-15%)

##### Integrate caching and content delivery within solutions

* ######    develop code to implement CDNs in solutions

    <span style="color:blue">[Azure CDN Documentation](https://docs.microsoft.com/en-us/azure/cdn/)</span>

    <span style="color:blue">[Best practices for using content delivery networks (CDNs)](https://docs.microsoft.com/en-us/azure/architecture/best-practices/cdn)</span>

    <span style="color:blue">[Create an Azure CDN endpoint](https://docs.microsoft.com/en-us/azure/cdn/cdn-create-endpoint-how-to)</span>

    <span style="color:blue">[What is Azure Front Door?](https://docs.microsoft.com/en-us/azure/frontdoor/front-door-overview)</span>

    <span style="color:blue">[Azure Cache for Redis](https://docs.microsoft.com/en-us/azure/azure-cache-for-redis/cache-overview)</span>

* ######    configure cache and expiration policies for FrontDoor, CDNs, or Redis caches Store and retrieve data in Azure Redis cache

    <span style="color:blue">[Control Azure CDN caching behavior with caching rules](https://docs.microsoft.com/en-us/azure/cdn/cdn-caching-rules)</span>

    <span style="color:blue">[Caching with Azure Front Door](https://docs.microsoft.com/en-us/azure/frontdoor/front-door-caching)</span>

    <span style="color:blue">[Quickstart: Create an Azure Cache for Redis instance](https://docs.microsoft.com/en-us/azure/azure-cache-for-redis/quickstart-create-redis)</span>

    <span style="color:blue">[Best practices for Azure Cache for Redis](https://docs.microsoft.com/en-us/azure/azure-cache-for-redis/cache-best-practices)</span>

    <span style="color:blue">[Quickstart: Use Azure Cache for Redis with a .NET Framework application](https://docs.microsoft.com/en-us/azure/azure-cache-for-redis/cache-dotnet-how-to-use-azure-redis-cache)</span>

    <span style="color:blue">[Caching](https://docs.microsoft.com/en-us/azure/architecture/best-practices/caching)</span>

##### Instrument solutions to support monitoring and logging

* ######    configure instrumentation in an app or service by using Application Insights

    <span style="color:blue">[Application Insights for ASP.NET Core applications](https://docs.microsoft.com/en-us/azure/azure-monitor/app/asp-net-core)</span>

    <span style="color:blue">[Quickstart: Start monitoring your website with Azure Monitor Application Insights](https://docs.microsoft.com/en-us/azure/azure-monitor/app/website-monitoring)</span>

* ######    analyze log data and troubleshoot solutions by using Azure Monitor

    <span style="color:blue">[Monitoring solutions in Azure Monitor](https://docs.microsoft.com/en-us/azure/azure-monitor/insights/solutions&tabs=portal)</span>

    <span style="color:blue">[Logs in Azure Monitor](https://docs.microsoft.com/en-us/azure/azure-monitor/platform/data-platform-logs)</span>

    <span style="color:blue">[Find and diagnose run-time exceptions with Azure Application Insights](https://docs.microsoft.com/en-us/azure/azure-monitor/learn/tutorial-runtime-exceptions)</span>

    <span style="color:blue">[Find and diagnose performance issues with Azure Application Insights](https://docs.microsoft.com/en-us/azure/azure-monitor/learn/tutorial-performance)</span>

* ######    implement Application Insights Web Test and Alerts

    <span style="color:blue">[Creating an Application Insights Web Test and Alert Programmatically](https://azure.microsoft.com/en-us/blog/creating-a-web-test-alert-programmatically-with-application-insights/)</span>

    <span style="color:blue">[Monitor the availability of any website](https://docs.microsoft.com/en-us/azure/azure-monitor/app/monitor-web-app-availability)</span>

#### Connect to and consume Azure services and third-party services (25-30%)

##### Develop an App Service Logic App

* ######    create a Logic App

    <span style="color:blue">[Quickstart: Create your first workflow by using Azure Logic Apps – Azure portal](https://docs.microsoft.com/en-us/azure/logic-apps/quickstart-create-first-logic-app-workflow)</span>

    <span style="color:blue">[Quickstart: Create automated tasks, processes, and workflows with Azure Logic Apps – Visual Studio](https://docs.microsoft.com/en-us/azure/logic-apps/quickstart-create-logic-apps-with-visual-studio)</span>

    <span style="color:blue">[Quickstart: Create and manage logic app workflow definitions by using Visual Studio Code](https://docs.microsoft.com/en-us/azure/logic-apps/quickstart-create-logic-apps-visual-studio-code)</span>

* ######    create a custom connector for Logic Apps

    <span style="color:blue">[Create a custom connector in Azure Logic Apps](https://docs.microsoft.com/en-us/connectors/custom-connectors/create-logic-apps-connector)</span>

    <span style="color:blue">[B2B enterprise integration solutions with Azure Logic Apps and Enterprise Integration Pack](https://docs.microsoft.com/en-us/azure/logic-apps/logic-apps-enterprise-integration-overview)</span>

* ######    create a custom template for Logic Apps

    <span style="color:blue">[Create Azure Resource Manager templates to automate deployment for Azure Logic Apps](https://docs.microsoft.com/en-us/azure/logic-apps/logic-apps-create-azure-resource-manager-templates)</span>

    <span style="color:blue">[Create logic app workflows from prebuilt templates](https://docs.microsoft.com/en-us/azure/logic-apps/logic-apps-create-logic-apps-from-templates)</span>

##### Implement API Management

* ######    create an APIM instance

    <span style="color:blue">[Create a new Azure API Management service instance](https://docs.microsoft.com/en-us/azure/api-management/get-started-create-service-instance)</span>

* ######    configure authentication for APIs

    <span style="color:blue">[How to secure APIs using client certificate authentication in API Management](https://docs.microsoft.com/en-us/azure/api-management/api-management-howto-mutual-certificates-for-clients)</span>

* ######    define policies for APIs

    <span style="color:blue">[Policies in Azure API Management](https://docs.microsoft.com/en-us/azure/api-management/api-management-howto-policies)</span>

    <span style="color:blue">[API Management policies](https://docs.microsoft.com/en-us/azure/api-management/api-management-policies)</span>

##### Develop event-based solutions

* ######    implement solutions that use Azure Event Grid

    <span style="color:blue">[What is Azure Event Grid?](https://docs.microsoft.com/en-us/azure/event-grid/overview)</span>

    <span style="color:blue">[Event-Driven Architecture in the Cloud with Azure Event Grid](https://docs.microsoft.com/en-us/archive/msdn-magazine/2018/february/azure-event-driven-architecture-in-the-cloud-with-azure-event-grid)</span>

    <span style="color:blue">[Quickstart: Route custom events to web endpoint with the Azure portal and Event Grid](https://docs.microsoft.com/en-us/azure/event-grid/custom-event-quickstart-portal)</span>

    <span style="color:blue">[Tutorial: Monitor virtual machine changes by using Azure Event Grid and Logic Apps](https://docs.microsoft.com/en-us/azure/event-grid/monitor-virtual-machine-changes-event-grid-logic-app)</span>

* ######    implement solutions that use Azure Notification Hubs

    <span style="color:blue">[What is Azure Notification Hubs?](https://docs.microsoft.com/en-us/azure/notification-hubs/notification-hubs-push-notification-overview)</span>

    <span style="color:blue">[Integration with App Service Mobile Apps](https://docs.microsoft.com/en-us/azure/notification-hubs/notification-hubs-app-service)</span>

    <span style="color:blue">[Create an Azure notification hub in the Azure portal](https://docs.microsoft.com/en-us/azure/notification-hubs/create-notification-hub-portal)</span>

* ######    implement solutions that use Azure Event Hub

    <span style="color:blue">[Features and terminology in Azure Event Hubs](https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-features)</span>

    <span style="color:blue">[Quickstart: Create an event hub using Azure portal](https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-create)</span>

    <span style="color:blue">[Tutorial: Stream data into Azure Databricks using Event Hubs](https://docs.microsoft.com/en-us/azure/databricks/scenarios/databricks-stream-from-eventhubs)</span>

##### Develop message-based solutions

* ######    implement solutions that use Azure Service Bus

    <span style="color:blue">[What is Azure Service Bus?](https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messaging-overview)</span>

    <span style="color:blue">[Quickstart: Use Azure portal to create a Service Bus queue](https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-quickstart-portal)</span>

    <span style="color:blue">[Get started with Service Bus queues](https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-dotnet-get-started-with-queues)</span>

* ######    implement solutions that use Azure Queue Storage queues

    <span style="color:blue">[What are Azure queues?](https://docs.microsoft.com/en-us/azure/storage/queues/storage-queues-introduction)</span>

    <span style="color:blue">[Get started with Azure Queue storage using .NET](https://docs.microsoft.com/en-us/azure/storage/queues/storage-dotnet-how-to-use-queues&tabs=dotnet)</span>
var express = require("express");
var router = express.Router();

const nameList = [
  {
    id: 1,
    Term : "Infrastructure as Code (IaC)",
    Description: 
    "The practice of defining and managing infrastructure resources using code or declarative configuration files. It enables provisioning, configuring, and managing infrastructure through automation, improving consistency and scalability.",
    References:
    "Davis, A. (2021). Bootstrapping Microservices with Docker, Kubernetes, and Terraform. Manning Publications."
  },
  {
    id: 2,
    Term: "Service Level Agreement (SLA)",
    Description: 
    "A contract or agreement between a service provider and its users, defining the expected level of service quality, availability, and performance. SLAs set measurable targets and provide guidelines for service management and customer satisfaction.",
    References:
    "Bachlechner, D., & Hauck, J. (2020). Service Level Agreement. In T. K. Das (Ed.), Encyclopedia of Information Science and Technology (5th ed., pp. 2567-2575). IGI Global."
  },
  {
    id:3,
    Term: "DevOps Culture",
    Description: 
    "A cultural shift that fosters collaborations, communication, and shared responsibility between development and operations teams. It promotes breaking down silos, automating processes, and embracing continuous learning and improvement. DevOps culture emphasizes the values of transparency, trust, and collaborations.",
    References: 
    "Forsgren, N., Humble, J., & Kim, G. (2018). DevOps Culture. In The DevOps Handbook: How to Create World-Class Agility, Reliability, and Security in Technology Organizations (pp. 37-59). IT Revolution."
  },
  {
    id:4,
    Term: "Version Control System (VCS)",
    Description: 
    "A system that enables tracking and management of changes to source code and other files. VCS allows multiple developers to work on a project concurrently, provides version history, facilitates collaboration, and helps with code management and branching strategies.",
    References: 
    "Loeliger, J., & McCullough, M. (2012). Version Control Systems. In Version Control with Git: Powerful Tools and Techniques for Collaborative Software Development (2nd ed., pp. 1-29). O'Reilly Media."
  },
  {
    id:5,
    Term: "Configuration Management",
    Description: 
    "The process of managing and controlling the configuration of software systems and infrastructure. It involves tracking, maintaining, and deploying configurations consistently across environments. Configuration management tools automate the provisioning, configuration, and management of software and infrastructure resources.",
    References: 
    "Humble, J., & Farley, D. (2010). Configuration Management. In Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation (pp. 125-152). Addison-Wesley."
  },
  {
    id: 6,
    Term: "Monitoring and Observability",
    Description: 
    "The practice of continuously monitoring and collecting data about the performance, availability, and behavior of systems and applications. Monitoring provides real-time insights into system health, while observability focuses on understanding system behavior and performance through log analysis, distributed tracing, and metrics.",
    References:
    "Newman, S. (2018). Monitoring and Observability. In Building Microservices: Designing Fine-Grained Systems (1st ed., pp. 221-246). O'Reilly Media."
  },
  {
    id: 7,
    Term: "Scalability",
    Description: 
    "The ability of a system or application to handle increasing workload or user demand by adapting its resources. Scalability can be achieved through horizontal scaling (adding more instances) or vertical scaling (increasing the resources of existing instances).",
    References:
    "Hassan, R., & Bahsoon, R. (2016). Scalability. In Principles of Performance Engineering for Telecommunication and Information Systems (pp. 19-28). Springer."
  },
  {
    id:8,
    Term: "GitOps",
    Description: 
    "A method for managing and automating infrastructure and application deployments using Git as the single source of truth. With GitOps, all changes to infrastructure and application configurations are made through version-controlled Git repositories, ensuring transparency and reproducibility.",
    References:
    "Cornellà-Detrell, J., & Galán, J. (2020). GitOps: A Working Definition. IEEE Software, 37(6), 70-75. doi: 10.1109/MS.2020.3015466"
  },
  {
    id: 9,
    Term: "Continuous Delivery (CD)",
    Description: 
    "An extension of continuous integration that focuses on automating the deployment process. CD enables teams to continuously deliver software changes to production environments in a reliable and efficient manner. It emphasizes the use of automated testing, configuration management, and release management techniques.",
    References:
    "Farley, D., & Humble, J. (2011). Continuous Delivery (CD). In Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation (pp. 1-10). Pearson Education."
  },
  {
    id: 10,
    Term: "Containerization",
    Description: 
    "The process of encapsulating an application and its dependencies into a lightweight, isolated container. Containers provide consistency across different environments and enable efficient deployment and scaling.",
    References:
    "Varghese, B., & Prasad, R. V. (2019). Containerization. In Handbook of Research on Microservices (pp. 170-183). IGI Global."
  },
  {
    id: 11,
    Term: "Microservices",
    Description: 
    "Microservices is an architectural style where a large application is broken down into smaller, loosely coupled services. Each service is independently deployable and can be developed and maintained by different teams. Microservices promote scalability, flexibility, and easier maintenance of complex systems.",
    References: 
    "Microsoft Azure. (n.d.). Microservices architecture. Retrieved from https://docs.microsoft.com/en-us/azure/architecture/guide/architecture-styles/microservices"
  },
  {
    id: 12,
    Term: "Serverless Computing",
    Description: 
    "Serverless computing allows developers to build and deploy applications without the need to manage underlying infrastructure. In a serverless environment, cloud providers automatically manage resource allocation and scaling based on demand, and users only pay for actual usage. It simplifies development and reduces operational overhead.",
    References:
    "Rosencrance, L. (2022, November). Serverless Computing. Retrieved from https://www.techtarget.com/searchitoperations/definition/serverless-computing"
  },
  {
    id: 13,
    Term: "Feature Flag",
    Description: 
    "A Feature Flag (also known as Feature Toggle) is a technique used to enable or disable specific features in an application without deploying new code. It allows developers to control the release of new functionalities and experiment with features in a controlled manner. Feature flags aid in incremental feature rollouts and enable quick rollbacks if issues arise.",
    References:
    "Rinaldi, B. (n.d.). What Are Feature Flags? LaunchDarkly Blog. Retrieved from https://launchdarkly.com/blog/what-are-feature-flags/"
  },
  {
    id: 14,
    Term: "Continuous Monitoring",
    Description: 
    "Continuous Monitoring is the practice of continuously monitoring and collecting data about the performance, availability, and behavior of systems and applications. Monitoring provides real-time insights into system health, while observability focuses on understanding system behavior and performance through log analysis, distributed tracing, and metrics.",
    References:
     "Newman, S. (2018). Monitoring and Observability. In Building Microservices: Designing Fine-Grained Systems (1st ed., pp. 221-246). O'Reilly Media."
  },
  {
    id: 15,
    Term: "Chaos Engineering",
    Description: 
    "Chaos Engineering is a discipline where controlled experiments are conducted on a system to identify weaknesses and potential failures. By intentionally injecting failures and observing system behavior, teams gain insights into resiliency, identify critical points, and make improvements to enhance system reliability.",
    References:
     "Rosenthal, C. (2021, June 25). What Chaos Engineering Is (and Isn't). DevOps.com. Retrieved from https://devops.com/what-chaos-engineering-is-and-isnt/"
  },
  {
    id: 16,
    Term: "Shift-Left Testing",
    Description: 
    "Shift-Left Testing is an approach that involves testing activities starting earlier in the software development lifecycle. It aims to identify and address defects at an early stage, reducing the cost and impact of fixing issues later in the process. Shift-Left Testing enhances collaboration between development and testing teams and leads to higher quality software.",
    References: 
    "Hayes, A. (2022, July 05). What Is Elasticity in Finance; How Does it Work (with Example)? Investopedia. Retrieved from https://www.investopedia.com/terms/e/elasticity.asp"
  },
  {
    id: 17,
    Term: "Elasticity",
    Description: 
    "Elasticity is a cloud computing characteristic that allows resources to automatically scale up or down based on demand. It enables applications to handle varying workloads efficiently, ensuring optimal performance and cost-effectiveness.",
    References: 
    "Hayes, A. (2022, July 05). What Is Elasticity in Finance; How Does it Work (with Example)? Investopedia. Retrieved from https://www.investopedia.com/terms/e/elasticity.asp"
  },
  {
    id: 18,
    Term: "Incident Management",
    Description: 
    "Incident Management is the process of identifying, resolving, and learning from incidents that disrupt normal operations. It involves a systematic approach to minimize the impact of incidents on users and restore service as quickly as possible.",
    References:
    "Team Asana. (2022, December 5). What is Incident Management? Steps, Tips, and Best Practices. Asana. Retrieved from https://asana.com/resources/incident-management"
  },
  {
    id: 19,
    Term: "Infrastructure Automation",
    Description: 
    "Infrastructure Automation involves using scripts and tools to automatically configure and manage infrastructure components. It reduces manual intervention, ensures consistency, and accelerates infrastructure provisioning and updates.",
    References: 
    "Doerrfeld, B. (2022, December 12). 5 Tips to Consider When Introducing Infrastructure Automation. DevOps.com. Retrieved from https://devops.com/5-tips-to-consider-when-introducing-infrastructure-automation/"
  },
  {
    id: 20,
    Term: "Orchestration",
    Description: 
    "In the context of DevOps, orchestration refers to the automated coordination and management of complex workflows and tasks. Orchestration tools streamline the deployment and scaling of applications, making it easier to manage and maintain large systems.",
    References:
    "Gill, N. S. (2022, November 14). Orchestration vs Automation - Understanding the Difference. XenonStack."
  },
  {
    id: 21,
    Term: "Blue-Green Deployment",
    Description: 
    "A deployment strategy where two identical production environments, \"Blue\" and \"Green,\" run simultaneously. During an update, traffic is gradually switched from the old version (Blue) to the new version (Green) to achieve zero-downtime deployments and easy rollback in case of issues.",
    References: 
    "Fowler, M. (2014). Blue-Green Deployment. Retrieved from https://martinfowler.com/bliki/BlueGreenDeployment.html"
  },
  {
    id: 22,
    Term: "Canary Deployment",
    Description: 
    "A deployment technique that releases a new version of an application to a subset of users or servers before making it available to the entire user base. Canary deployments allow developers to gather real-time feedback, identify potential issues, and ensure a smooth rollout to the entire audience.",
    References: 
    "Newman, S. (2015). Canary Deployment. Retrieved from https://www.thoughtworks.com/radar/techniques/canary-deployments"
  },
  {
    id: 23,
    Term: "Infrastructure as a Service (IaaS)",
    Description: 
    "A cloud computing model where virtualized computing resources (servers, storage, networking) are provided over the internet. IaaS allows users to rent and manage infrastructure on a pay-as-you-go basis, providing scalability and flexibility without the need for physical hardware maintenance.",
    References: 
    "Boisvert, M., Bigelow, S. J., & Chai, W. (n.d.). Infrastructure as a Service (IaaS). TechTarget. Retrieved from https://searchcloudcomputing.techtarget.com/definition/Infrastructure-as-a-Service-IaaS"
  },
  {
    id: 24,
    Term: "Platform as a Service (PaaS)",
    Description: 
    "A cloud computing model that provides a platform and environment for developers to build, deploy, and manage applications without worrying about the underlying infrastructure. PaaS offers pre-configured development tools, databases, and operating systems, streamlining the development process.",
    References: 
    "Chai, W., Brush, K., & Bigelow, S. J. (n.d.). Platform as a Service (PaaS) Definition and Guide. TechTarget. Retrieved from https://searchcloudcomputing.techtarget.com/definition/Platform-as-a-Service-PaaS"
  },
  {
    id: 25,
    Term: "Software as a Service (SaaS)",
    Description: 
    "A cloud computing model where software applications are delivered over the internet on a subscription basis. SaaS eliminates the need for users to install, manage, and maintain software locally, as the provider handles all updates, security, and availability aspects. Common examples include web-based email and collaboration tools.",
    References: 
    "Grant, M. (2022, December 15). Software as a Service (SaaS): Definition and Examples. Retrieved from https://www.investopedia.com/terms/s/software-as-a-service-saas.asp"
  },
  {
    id: 26,
    Term: "High Availability (HA)",
    Description: 
    "A characteristic of systems designed to ensure uninterrupted operation and minimize downtime. High availability involves redundant components, failover mechanisms, and load balancing to provide continuous service even in the face of hardware or software failures, contributing to better reliability and user satisfaction.",
    References: 
    "Lutkevich, B., & Gillis, A. S. (n.d.). High Availability (HA). TechTarget. Retrieved from https://searchdatacenter.techtarget.com/definition/high-availability"
  },
  {
    id: 27,
    Term: "Immutable Infrastructure",
    Description: 
    "An approach where infrastructure components, once deployed, are never modified in production. Instead of updating existing resources, new instances are created with the desired changes, reducing the risk of configuration drift and ensuring consistency and reproducibility in deployments.",
    References: 
    "Dadgar, A. (2018, November 15). A Tale of Two Terraforms — A Model for Managing Immutable and Mutable Infrastructure. Retrieved from https://medium.com/hashicorp-engineering/a-tale-of-two-terras-a-model-for-managing-immutable-and-mutable-infrastructure-489c5ac2f5f5"
  },
  {
    id: 28,
    Term: "Docker Compose",
    Description: 
    "A tool that allows users to define and manage multi-container Docker applications. Docker Compose uses a YAML file to configure the services, networks, and volumes required for the application, simplifying the process of running and scaling complex applications with multiple interconnected containers.",
    References: 
    "Ligios, A. (2022, November 30). Introduction to Docker Compose. Docker. Retrieved from https://docs.docker.com/compose/overview/"
  },
  {
    id: 29,
    Term: "Dockerfile",
    Description: 
    "A text file used to define the steps and instructions for building a Docker image. Dockerfile contains all the commands required to assemble an image, such as installing dependencies, copying files, and setting configurations. It serves as a blueprint for creating a reproducible and automated Docker image.",
    References: 
    "Afreen, S. (2023, March 17). What is a Dockerfile? A Step-by-Step Guide [2023 Updated]. Retrieved from https://www.edureka.co/blog/what-is-dockerfile-a-step-by-step-guide"
  },
  {
    id: 30,
    Term: "Docker Image",
    Description: 
    "A lightweight, standalone, and executable software package that includes everything needed to run a piece of software, including code, runtime, libraries, dependencies, and environment variables. Docker images serve as the basis for creating containers, ensuring consistent and portable application deployments.",
    References: 
    "Afreen, S. (2023, February 28). Docker Images: Everything You Need to Know. Retrieved from https://www.edureka.co/blog/docker-images-everything-you-need-to-know/"
  },
  {
    id: 31,
    Term: "Terraform",
    Description: 
    "Terraform is an open-source Infrastructure as Code (IaC) tool developed by HashiCorp. It allows you to define and provision infrastructure resources, such as virtual machines, networks, storage, and more, using declarative code.",
    References: 
    "Gillis, R. A. A. S. (n.d.). Terraform. SearchITOperations. TechTarget. https://www.techtarget.com/searchitoperations/definition/Terraform"
  },
  {
    id: 32,
    Term: "Container Registry",
    Description: 
    "A container registry is a repository for storing and managing container images. Containerization, popularized by Docker, allows you to package an application and its dependencies into a single lightweight unit known as a container. A container registry stores these container images, making them accessible for deployment on various platforms. Examples of container registries include Docker Hub, Google Container Registry, and Azure Container Registry.",
    References: 
    "Red Hat. (2022, July 27). What is a container registry? Red Hat. https://www.redhat.com/en/topics/cloud-native-apps/what-is-a-container-registry"
  },
  {
    id: 33,
    Term: "Kubernetes Cluster",
    Description: 
    "Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. A Kubernetes cluster consists of a set of worker nodes (machines) that run containers and a master node that manages and controls the cluster. ",
    References: 
    "Red Hat. (2020, January 15). What is a Kubernetes cluster? Red Hat. https://www.redhat.com/en/topics/containers/what-is-a-kubernetes-cluster"
  },
  {
    id: 34,
    Term: "Jenkins",
    Description: 
    "Jenkins is an open-source automation server that facilitates the continuous integration and continuous delivery (CI/CD) of software applications. It helps development teams automate various stages of the software development lifecycle, including building, testing, and deploying code changes. ",
    References: 
    "Heller, M. (2023, March 15). What is Jenkins? The CI server explained. InfoWorld. https://www.infoworld.com/article/3239666/what-is-jenkins-the-ci-server-explained.html"
  },
  {
    id: 35,
    Term: "Deployment Pipeline",
    Description: 
    "A Deployment Pipeline is a sequence of automated steps that code changes go through to be built, tested, and deployed. It encompasses CI/CD practices to ensure smooth and reliable software delivery.",
    References: 
    "Filho, W. (2016, July 11). What is a deployment pipeline and how does it help software development teams? The Whereby Blog. https://medium.com/the-making-of-whereby/what-is-a-deployment-pipeline-and-how-it-helps-software-development-teams-6cb29917ceea"
  },
  {
    id: 36,
    Term: "Release Management",
    Description: 
    "Release Management involves planning, coordinating, and executing the deployment of software releases to various environments. It ensures that new features and fixes are delivered smoothly to users.",
    References: 
    "What Is Release Management? (And How to Start Your Career in It). (2023, June 17). Coursera. https://www.coursera.org/articles/release-management?"
  },
  {
    id: 37,
    Term: "Service Mesh",
    Description: 
    "A Service Mesh is a dedicated infrastructure layer that manages communication between microservices within a containerized application. It provides features like traffic management, security, and observability.",
    References: 
    "Service Mesh. (2018, June 29). Red Hat. https://www.redhat.com/en/topics/microservices/what-is-a-service-mesh"
  },
  {
    id: 38,
    Term: "Log Aggregation",
    Description: 
    "Log Aggregation involves collecting and centralizing log data from various sources to facilitate analysis, troubleshooting, and monitoring.",
    References: 
    "Sharif, A. (2022, December 21). What is Log Aggregation? Retrieved from https://www.crowdstrike.com/cybersecurity-101/observability/log-aggregation/"
  },
  {
    id: 39,
    Term: "Service Discovery",
    Description: 
    "Service Discovery is the process of automatically identifying and locating services within a network, often used in microservices architectures.",
    References: 
    "Simone Cusimano. (2022, November 6). Service Discovery in Microservices. Retrieved from https://www.baeldung.com/cs/service-discovery-microservices"
  },
  {
    id: 40,
    Term: "Pipeline Orchestration",
    Description: 
    "Pipeline Orchestration involves managing the sequence and execution of various stages in a software delivery pipeline, such as building, testing, and deploying.",
    References: 
    "Agofure, M. (2022, May 9). The Importance of Data Orchestration Pipelines for Organizations. [Blog post]. Retrieved from https://streamsets.com/blog/data-orchestration-pipelines/"
  },
  {
    id: 41,
    Term: "Pod",
    Description: 
    "A Pod is the smallest deployable unit in Kubernetes. It can contain one or more containers that share the same network namespace and storage volume. Pods are often used to group containers that work together.",
    References: 
    ""
  },
  {
    id: 42,
    Term: "Helm Chart",
    Description: 
    "Helm is a package manager for Kubernetes that allows you to define, install, and upgrade even the most complex Kubernetes applications. Helm charts are packages of pre-configured Kubernetes resources.",
    References: 
    ""
  },
  {
    id: 43,
    Term: "Node",
    Description: 
    "In Kubernetes, a Node is a worker machine that runs containerized applications. Nodes are managed by the control plane, which schedules workloads and monitors their status.",
    References: 
    "Kubernetes Nodes: https://kubernetes.io/docs/concepts/architecture/nodes/"
  },
  {
    id: 44,
    Term: "Ingress",
    Description: 
    "Ingress is an API object in Kubernetes that manages external access to services within a cluster. It provides HTTP and HTTPS routing, load balancing, and can perform SSL termination.",
    References: 
    "Kubernetes Ingress: https://kubernetes.io/docs/concepts/services-networking/ingress/"
  },
  {
    id: 45,
    Term: "Service",
    Description: 
    "A Service in Kubernetes is an abstraction that defines a logical set of Pods and a policy by which to access them. It enables network access to a set of Pods, often used to expose applications within the cluster.",
    References: 
    "Kubernetes Services: https://kubernetes.io/docs/concepts/services-networking/service/"
  },
  {
    id: 46,
    Term: "ReplicaSet",
    Description: 
    "A ReplicaSet in Kubernetes ensures that a specified number of Pod replicas are running at all times. It is used to scale applications horizontally by maintaining a desired number of Pod instances.",
    References: 
    "Kubernetes ReplicaSet: https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/"
  },
  {
    id: 47,
    Term: "Persistent Volume (PV)",
    Description: 
    "A Persistent Volume in Kubernetes is a piece of network storage provisioned by an administrator that can be used by Pods. It allows data to survive container restarts.",
    References: 
    "Kubernetes Persistent Volumes: https://kubernetes.io/docs/concepts/storage/persistent-volumes/"
  },
  {
    id: 48,
    Term: "Persistent Volume Claim (PVC)",
    Description: 
    "A Persistent Volume Claim in Kubernetes is a request for storage by a user or application. It consumes Persistent Volumes and provides storage resources to Pods.",
    References: 
    "Kubernetes Persistent Volume Claims: https://kubernetes.io/docs/concepts/storage/persistent-volumes/#persistentvolumeclaims"
  },
  {
    id: 49,
    Term: "Secret",
    Description: 
    "A Secret in Kubernetes is an object for storing sensitive information, such as passwords and tokens. It is often used to secure data that is used by Pods or other resources.",
    References: 
    "Kubernetes Secrets: https://kubernetes.io/docs/concepts/configuration/secret/"
  },
  {
    id: 50,
    Term: "ConfigMap",
    Description: 
    "A ConfigMap in Kubernetes is an API object for storing non-sensitive configuration data as key-value pairs. It is commonly used to decouple configuration from Pods.",
    References: 
    "Kubernetes ConfigMaps: https://kubernetes.io/docs/concepts/configuration/configmap/"
  }
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "SIT722 DevOps Glossary ", names: nameList });
});

module.exports = router;
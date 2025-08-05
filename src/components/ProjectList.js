import Code from "./codes/code";

const ProjectList = {
  Software: [
    {
      name: "DirectEdge",
      image: "/assets/directedge.png",
      github: "https://github.com/aranya170/DirectEdge",
      tags: [
        "Computer Vision",
        "Deep Learning",
        "Python",
        "Flask",
        "Tailwind CSS",
        "React",
      ],
      files: [
        {
          name: "README.md",
          type: "info",
          content:
            "At DirectEdge, we revolutionize the way businesses source their products by directly connecting them with farmers. Our mission is to streamline the distribution process, reducing intermediaries and ensuring fresher, more sustainable goods. As an all-stop business solution, we handle everything from procurement to delivery, offering a seamless, efficient, and transparent supply chain. By partnering with us, businesses gain access to high-quality products at competitive prices, while farmers receive fair compensation for their hard work. Join us in reshaping the future of supply chains, fostering stronger relationships between producers and businesses, and promoting a more sustainable food system.",
        },
        {
          name: "correlation.ipynb",
          type: "notebook",
          content:
            "https://nbviewer.org/github/rafsanahmed28/Movie-Correlation---Pandas-NumPy-SNS/blob/main/Finding%20Movie%20Correlation.ipynb?flush_cache=true",
          language: "python",
        },
      ],
    },
    {
      name: "Kairos",
      image: "/assets/kairos.png",
      github: "https://github.com/aranya170/Kairos",
      tags: ["MySQL", "Bootstrap", "PHP", "JavaScript"],
      files: [
        {
          name: "README.md",
          type: "info",
          content:
            "Kairos functions as a supportive system meticulously crafted to facilitate personal growth and development. Our primary objective revolves around fostering the cultivation of positive habits, furnishing users with effective tools for life tracking, and aiding in the eradication of detrimental behaviors, notably procrastination.",
        },
      ],
    },
    {
      name: "Peer Pie",
      image: "/assets/peerpie.png",
      github: "https://github.com/aranya170/Peer_Pie/tree/main",
      tags: ["JAVA", "MySQL", "CSS"],
      files: [
        {
          name: "README.md",
          type: "info",
          content:
            "Connecting learners, expanding horizons. Peer Pie is a platform designed to connect students with peers who share similar interests, enabling them to collaborate on projects, share knowledge, and learn from each other. The platform aims to foster a community of learners who can support and motivate one another in their academic journeys.",
        },
      ],
    },
  ],
  Python: [
    {
      name: "Movie Correlation Analysis",
      image: "/assets/correlation.png",
      github:
        "https://github.com/rafsanahmed28/Movie-Correlation---Pandas-NumPy-SNS",
      tags: ["Pandas", "Numpy", "Seaborn", "Matplotlib"],
      dataset: "https://www.kaggle.com/datasets/danielgrijalvas/movies",
      files: [
        {
          name: "README.md",
          type: "info",
          content:
            "Analyzed movie data to find correlations between different features such as budget, revenue, and ratings using Python libraries like Pandas, NumPy, and Seaborn. The project includes data cleaning, transformation, and visualization to uncover insights about the movie industry.",
        },
        {
          name: "correlation.ipynb",
          type: "notebook",
          content:
            "https://nbviewer.org/github/rafsanahmed28/Movie-Correlation---Pandas-NumPy-SNS/blob/main/Finding%20Movie%20Correlation.ipynb?flush_cache=true",
          language: "python",
        },
      ],
    },

    {
      name: "Automating Crypto Data using CoinGecko API",
      image: "/assets/crypto.png",
      github:
        "https://github.com/rafsanahmed28/Automating-Crypto-Data-using-CoinGecko-API",
      tags: ["Pandas", "Seaborn", "Matplotlib"],
      files: [
        {
          name: "README.md",
          type: "info",
          content:
            "Automated the retrieval of cryptocurrency data using the CoinGecko API and performed analysis using Python libraries pandas, seaborn and matplotlib. This project is meant to showcase the data automation and collection process, which can be used for further analysis or visualization.",
        },
        {
          name: "crypto.ipynb",
          type: "notebook",
          content:
            "https://nbviewer.org/github/rafsanahmed28/Automating-Crypto-Data-using-CoinGecko-API/blob/main/Automating%20Crypto%20-%20CoinGecko%20API.ipynb?flush_cache=true",
          language: "python",
        },
      ],
    },

    {
      name: "Amazon Web Scraping",
      image: "/assets/amazon.png",
      github: "https://github.com/rafsanahmed28/Amazon-Web-Scraping",
      tags: ["BeautifulSoup", "Pandas", "Web Scraping", "Email Automation"],
      files: [
        {
          name: "README.md",
          type: "info",
          content:
            "Scraped product data from Amazon using BeautifulSoup and Pandas. The data is stored in a CSV file and is used for tracking price changes over time. This project also showcases how you can email yourself whenever a product's price drops below a certain threshold.",
        },
        {
          name: "amazon.ipynb",
          type: "notebook",
          content:
            "https://nbviewer.org/github/rafsanahmed28/Amazon-Web-Scraping/blob/main/Amazon%20Web%20Scraping%20-%20Data%20Project.ipynb?flush_cache=true",
          language: "python",
        },
      ],
    },
  ],
  Hardware: [
    {
      name: "4 Wings Drone",
      image: "/assets/Hardware3.jpg",
      tags: ["Arduino Nano", "3D Design", "Brushless Motor"],
      files: [
        {
          name: "README.md",
          type: "info",
          content: "",
        },
      ],
    },
    {
      name: "IOT Based Smart Bus Tracking System",
      image: "/assets/Hardware1.png",
      github: "https://github.com/aranya170/Shuttle-Bus-Tracking-System",
      tags: ["Arduino", "ESP 32", "Laser Emmiter", "LDR", "GPS Module"],
      files: [
        {
          name: "README.md",
          type: "info",
          content:
            "This project is a comprehensive Shuttle Bus Tracking and Monitoring System developed for a university-level IoT and embedded systems project. The system combines multiple sensors and technologies to ensure real-time location tracking, passenger queue monitoring, environmental sensing, and safety alerts for shuttle operations on campus.",
        },
      ],
    },
    {
      name: "Smart Voting Machine",
      image: "/assets/Hardware2.jpg",
      tags: ["Arduino", "i2C", "Buzzer", "Laser"],
      files: [
        {
          name: "README.md",
          type: "info",
          content:
            "This project is a comprehensive Shuttle Bus Tracking and Monitoring System developed for a university-level IoT and embedded systems project. The system combines multiple sensors and technologies to ensure real-time location tracking, passenger queue monitoring, environmental sensing, and safety alerts for shuttle operations on campus.",
        },
      ],
    },
  ],
};

export default ProjectList;

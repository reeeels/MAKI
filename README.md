# Maki

# Pitch: 
Introducing **Maki** - your smart solution for highlighting safety narratives. With our AI-powered app, you can review patient case notes quickly and accurately, identifying and classifying potential safety concerns before they become critical. 

# Inspiration:
When doctors and nurses take care of people, sometimes things can go wrong, and they need to make sure it doesn't happen again. To do this, they read the **case notes** (provide a detailed description of the patient's medical and social situation) and try to understand what went wrong. But reading about it can take a long time and use up a lot of people's time and energy. 

But it doesn’t have to be this way! Exciting technologies like **AI and ML** have made groundbreaking strides towards automating medical tasks, so what better way to solve this problem than leveraging these exciting technologies?!


# What Maki does:
By leveraging **NLP (Natural Language Processing) machine learning algorithms** and the **GPT (Generative Pre-trained Transformer) neural network language model**, **Maki** identifies and classifies data found in case note narratives giving you the confidence to make informed decisions about patient care. Our app gives the user the liberty to select their preference of labels for the data including but not limited to **symptoms, medical history, physical exam, medication, and treatment**.

In addition to its clean and modern aesthetic, **Maki** is **inclusive** as it offers speech-to-text and text-to-speech features. The **intuitive interface** makes it easy to navigate complex medical data, so you can focus on what matters most - providing safe and effective care.


# How we built Maki:
**Maki** was constructed in two different and interconnected stages, *frontend* and *backend*.
*Frontend*:
Our project's front end is built with a combination of **NextJS (React)** and **TypeScript**. Users can access two pages: the initial landing page and the results page. The landing page provides information about the project and features a call-to-action button that leads the user to the results page. The results page allows users to input their prompts through file upload, text-to-speech, or regular text input. After hitting the *"generate"* button, the user's input is sent to the backend where relevant data is extracted and classified based on predefined labels. The page was made *reactive* through several styling options and the usage of states in the messages.

*Backend*:

The backend was created using **TypeScript**, **Open AI GPT-3 API**, and **spaCy**. The core algorithm is a deep neural network language model derived from **Open AI GPT-3 API**, which has been trained on a large corpus of text data using unsupervised learning techniques. **GPT** allows **Maki** to understand the context of a given text input and generate coherent and contextually appropriate responses. 

In addition, **Maki** uses a pre-trained spaCy model called **“en_core_sci_lg”** - a full **spaCy** pipeline for biomedical data with a larger vocabulary and 600k word vectors. The  model uses **NLP** algorithms such as **named entity recognition** and **part-of-speech tagging** to extract relevant data and classify it according to predefined labels.


# Challenges we ran into:
- Deciding on the machine learning model
- As with many pre-trained models, the spaCy model initially found it difficult to classify the extracted data on labels other than its pre-defined one.
- Building a node.js application that utilises OpenAI API.

# Accomplishments we’re proud of:
- Developing a full-fledged MVP and one that can be easily “plugged and played” by **Eli Lilly**.
- Utilizing our skills and experiences in offering efficient solutions to a real-life problem especially one that intersects the two fields we are super interested in - healthcare and technology.


# What we learned:
- Gained clarity on the best way to merge interests in technology and healthcare and understood the limitless potentential of the interesection of both fields. 
- Trusting every member of the team to complete their parts is super important in making a team work.

# What’s next for Maki:
- Customize the en_core_sci_lg model on our own labeled data including training the model on our specific dataset to improve its ability to recognize entities in our domain. 
- Augment **Maki** with additional accessibility features like gesture control
- Automate and Implement the next steps of the Global Safety Patient Process after identification and classification of risks i.e assessment and analysis of risks, implementation of safety measures, monitoring and evaluation, communication and collaboration, continuous learning and improvement 



Join the revolution in patient safety with **Maki**.


# Try it out
- Github [@github]( https://github.com/reeeels/MAKI)
- Presentation [@presentation](https://docs.google.com/presentation/d/1zaPoWmBeCDl69FFItpxflnEZfHjmvVwJTIyUnh4uj6A/edit?usp=sharing)
- Figma [@figma](https://www.figma.com/file/P81kNcdv5OqpxOfMXMGkco?node-id=0:1&comments-enabled=1&locale=en)

# Contributors
- Aminu Abdusalam [@aminuabdusalam](https://github.com/aminuabdusalam)
- Mariaassumpta Ezedimma [@mariaeze](https://github.com/mariaeze)
- Temiloluwa Ige [@reeeels](https://github.com/reeeels)
- Olakitan Oguntuase [@olakt-ogun](https://github.com/olakt-ogun)

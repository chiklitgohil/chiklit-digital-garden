---
{"dg-publish":true,"permalink":"/notes/ai-ml-guide/","tags":["work","project"],"dg-note-properties":{"tags":["work","project"]}}
---


# Building a Career in AI — ML

## Part 0: Before You Begin
### Who This Guide Is For

This roadmap 

### How to Use this Guide
### Learning Philosophy
If you are here to learn AI in Months, leave. This roadmap is for mastery, not mediocrity.
Here is a [blog](https://www.norvig.com/21-days.html) by Peter Norvig that convey this idea well.


## Part I: Understanding the Field

It is important for you to understand the ML Ecosystem before you get started with learning.

### Machine Learning Careers
Research vs. Production (Academia vs. Industry)

Different Roles
1. Creating new AI methods (Researcher)  
2. Training models from data (ML Engineer)  
3. Building data infrastructure (Data Engineer)  
4. Analyzing data and building predictive models (Data Scientist)  
5. Operating AI in production (AI Systems Engineer)  
6. Defining AI product strategy (AI Product Manager)  
7. Governing AI responsibly (AI Governance Specialist)

Types of Companies

1. Application vs. Tooling Companies
2. Enterprise vs. Consumer Companies (B2B vs. B2C)
3. Startup vs. Big Companies
    - Small scale companies hire one persona who can take up multiple roles, in contrast Large scale companies hire multiple people for one role. It's a spectrum.
## Part II. The Roadmap

**How to Use This Roadmap**
This is not a linear checklist. Phases overlap. Start projects earlier than feels comfortable. The goal is not to finish every resource listed — it is to build enough depth to do real work and enough portfolio to prove it.

Let the learning begin... or let the *Machine learning* begin.

### Stage 1: Setup

#### Terminal / Shell
- [http://linuxcommand.org/tlcl.php](http://linuxcommand.org/tlcl.php)
- https://ubuntu.com/tutorials/command-line-for-beginners#1-overview
- [https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line)
- [missing.csail.mit.edu](missing.csail.mit.edu)

#### Git & GitHub
- [Git Tutorial for Beginners - Programming with Mosh](https://youtu.be/8JJ101D3knE)
- [Pro Git - Ben Straub (Book)](https://git-scm.com/book/en/v2) - Complements along side the video

#### Python
Basic Syntex
Pick one entry point based on where you are:
- **Absolute beginner**: [Programming for Everybody](https://www.coursera.org/learn/python) — Charles Severance (Coursera)
- **Some programming experience**: Skip straight to [Automate the Boring Stuff with Python](https://automatetheboringstuff.com/) — Al Sweigart (free online)
- https://docs.python.org/3/tutorial/
Once you have basic syntax down, drill with [LeetCode](https://leetcode.com/) in Python. Do easy problems. Do not move to DSA yet — just get comfortable with the language.

Object Oriented Programming

#### VS Code & Jupyter Notebooks
- Setup the VS Code enviroment
- Jupyter Notebooks (via Anaconda or standalone)
    - https://www.anaconda.com/docs/getting-started/main

#### Docker
#### SQL
1. [thoughtspot.com/sql-tutorial](https://www.thoughtspot.com/sql-tutorial)
2. [slqbolt](https://sqlbolt.com/) / [sqlzoo](https://sqlzoo.net/)
3. [DuckDB](https://duckdb.org/docs/current/clients/python/overview)
4. PostgreSQL

### Stage 2: Math Foundations
Do not try to learn all maths once. Prioritize in this sequence:

#### Linear Algebra
- [ ] [18.06: Linear Algebra by MIT](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/video_galleries/video-lectures/)
- [ ] [Essence of linear algebra](https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab) - 3Blue1Brown (YouTube)
- _Mathematics for Machine Learning_ — Deisenroth, Faisal, Ong (free PDF available)

#### Probability & Statistics
- [StatQuest with Josh Starmer](https://www.youtube.com/@statquest) (YouTube) — genuinely the best intro resource
- [StatQuest — Machine Learning Playlist (Josh Starmer)](https://www.youtube.com/playlist?list=PLblh5JKOoLUICTaGLRoHQDuF_7q2GfuJF)
- _Practical Statistics for Data Scientists_ — Andrew Bruce (for applied intuition)

#### Calculus
- [Essence of calculus](https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr) - 3Blue1Brown (YouTube)
- You need derivatives and the chain rule. Multivariable calculus and differential equations can wait until you hit deep learning and need backpropagation.

**Comprehensive reference** (use alongside, not as primary reading):
- [Mathematics for Machine Learning and Data Science Specialization](https://www.deeplearning.ai/courses/mathematics-for-machine-learning-and-data-science-specialization/) (DeepLearning.AI)
* Khan Academy: Linear Algebra, Statistic Probability, Multivariable Calculus, Differential Equations
* https://mml-book.github.io/book/mml-book.pdf


### Stage 3: Programming for Data

Learn these In order. Each one builds on the last.
#### NumPy
1. [ ] https://numpy.org/doc/stable/user/absolute_beginners.html
2. [ ] https://www.w3schools.com/python/numpy/default.asp

#### Pandas
1. [ ] http://pandas.pydata.org/docs/user_guide/10min.html
2. [ ] https://www.kaggle.com/learn/pandas / https://realpython.com/learning-paths/pandas-data-science/-
3. [ ] https://pandas.pydata.org/docs/ / https://www.w3schools.com/python/pandas/
4. [ ] https://youtube.com/playlist?list=PL-osiE80TeTsWmV9i9c58mdDCSskIFdDS&si=m6S8xy_ZqWZY3An-

#### Matplotlib / Seaborn

**All in one resources**
- [Data Analysis with Python — Full Course (NumPy, Pandas, Matplotlib, Seaborn)](https://www.youtube.com/watch?v=r-uOLxNrNk8)

Note: PyTorch/TensorFlow will be learnt in Stage 4, not now.

---

### Stage 4: Machine Learning

#### 4.1 Classical ML
- [ ] [Machine Learning Specialization - Andrew Ng (Coursera)](https://www.coursera.org/specializations/machine-learning-introduction)
- [ ] _Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow_ — Aurelien Geron
- [ ] The Hundred-page Machine Learning Book (Book by Andriy Burkov)
- [ ] ~~Why Machines Learn (Book by Anil Ananthaswamy)~~

- [ ] Classical ML with Scikit-learn
- [Scikit-learn Tutorial — Machine Learning in Python](https://www.youtube.com/playlist?list=PL5-da3qGB5ICeMbQuqbbCOQWcS6OYBr5A)
- [Machine Learning with Python — Full Course](https://www.youtube.com/playlist?list=PLeo1K3hjS3uvCeTYTeyfe0-rN5r8zn9rw)

---
- [ ] ~~How to Win a Data Science Competition: Learn from Top Kagglers by Coursera~~
    - This course has been discontinued; But I am sure you can find its archives online, if you search for it. (goates course, worth finding) 
    - [https://www.bilibili.com/video/BV117411y7Fa?p=2&spm_id_from=333.788.player.switch](https://www.bilibili.com/video/BV117411y7Fa?p=2&spm_id_from=333.788.player.switch)
- [Kaggle](https://www.kaggle.com/) — competitions, datasets, notebooks; great for building reps on messy real data
- Start with a Getting Started competition (Titanic, House Prices) before touching anything competitive

[Exploratory Data Analysis with Pandas & Python — Beginner to Pro](https://www.youtube.com/watch?v=xi0vhXFPegw)
[Handling Imbalanced Datasets in Machine Learning](https://www.youtube.com/watch?v=JnlM4yLFNuo)
[Beginner Kaggle Data Science Project Walk-Through (Titanic)](https://www.youtube.com/watch?v=I3FBJdiExcg)
[Kaggle Competition Beginner Walkthrough: Train a Model and Submit Predictions](https://www.youtube.com/watch?v=mSusDGZhkVU)
kaggle.com/learn

Kaggle Learn tracks
First ML projects
EDA & Feature Engineering
Model Evaluation & Experimentation

Project I: Yet to be added to this roadmap
Paper I: Yet to be addes to this roadmap

#### Deep Learning
- [ ] [Practical Deep Learning for Coders (Free course by fast.ai)](https://course.fast.ai/)
- [Deep Learning Specialization](https://www.coursera.org/specializations/deep-learning) - Andrew Ng (Coursera)
- [Neural Networks: Zero to Hero](https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ) - Andrej Karpathy (YouTube) - one of the best learning resources in existence; do not skip
- [ ] PyTorch
    - [Official Tutorial](https://docs.pytorch.org/tutorials/) are great
- [ ] [Keras](https://keras.io/guides/)
- Tokenization
- [Intro to Large Language Models](https://youtu.be/zjkBMFhNj_g) - Andrej Karpathy (YouTube, 1 hour) - watch after the playlist above

**Primary framework: PyTorch.** Learn this. TensorFlow exists and is used in production at some companies, but PyTorch has won the research space and is increasingly dominant in industry. Learn to read TensorFlow code, but build in PyTorch.

**Advanced reading** (for after you have hands-on experience, not before):

- _Hands-On Large Language Models_ — Jay Alammar
- _Understanding Deep Learning_ — Simon J. D. Prince (free PDF)
- _Deep Learning_ — Goodfellow, Bengio, Courville (graduate-level reference text)
- _Pattern Recognition and Machine Learning_ — Christopher Bishop (graduate-level reference text)
- [Stanford CS25: Transformers](https://web.stanford.edu/class/cs25/) (lecture series)

#### LLM Engineering
- Embeddings
- Vector Databases
- RAG Systems
- OpenAI / Anthropic / Open-source models
- Evaluation
- Agents & workflows
- LLM application projects

---

### Stage 5: Production ML

You will learn systems

#### Software Engineering Fundamentals

**DSA for interviews:**

- Theory: [Abdul Bari DSA Playlist](https://www.youtube.com/@abdul_bari) (YouTube)
- Practice: [LeetCode](https://leetcode.com/) — this is the standard; aim for consistency over volume
- Target: comfortable with arrays, strings, hashmaps, trees, graphs, dynamic programming at easy-medium level

**Backend languages:** Python is your primary language and will remain so for most ML work. C/C++ and Rust become relevant only if you go into inference optimization, CUDA kernels, or systems-level ML. Do not spend time on them until you have a specific reason to.

#### ML Engineering & MLOps

- _Designing Machine Learning Systems_ — Chip Huyen — read this before you take any ML system to production
- _Practical MLOps_ — covers deployment, monitoring, pipelines
- _AI Engineering_ — covers the stack around LLM-based systems

**Tools to learn hands-on:**

- [Weights & Biases](https://wandb.ai/) — experiment tracking; use it on your own projects from day one
- MLflow — alternative to W&B; worth knowing exists
- Docker — containerization; expected knowledge for any engineering role
- Basic cloud (AWS / GCP / Azure) — know how to spin up a VM and run a training job

#### ML System Design

- Designing Machine Learning Systems (Book by Chip Huyen)
- [ByteByteGo](https://bytebytego.com/) — general system design
- [HelloInterview](https://www.hellointerview.com/) — ML system design specifically

#### Paper Reimplementation

One of the highest-leverage exercises available. Pick a landmark paper and implement it from scratch.

Good starting points:

- _Attention Is All You Need_ (Transformer)
- _Deep Residual Learning for Image Recognition_ (ResNet)
- _Word2Vec_

Do not implement it by reading someone else's code. Read the paper, then build. Reference code only when stuck.

---

## Part III. Becoming Employable

### Building Projects
Do not wait until you have “finished” learning. Start your first project when you finish the Andrew Ng ML course.

#### How to Approach Projects

Discard the old way of thinking about projects  
**Step 1:** Identify a business problem (not an AI problem).  
**Step 2:** Brainstorm AI solutions.  
**Step 3:** Assess the feasibility and value of potential solutions.   
**Step 4:** Determine milestones.  
**Step 5:** Budget for resources.

**Project framework:**

1. Identify a real problem (not "I want to do ML")
2. Find or collect data for it
3. Build the simplest possible solution first
4. Iterate

_Not a phase you enter — something you build toward throughout._

### GitHub Portfolio

Every project should have:

- A clear README explaining what the problem is, what you built, and what you learned
- Clean, readable code
- Results and visualizations where applicable

Three strong projects beat ten weak ones.

### Writing
1. Technical blogging
2. Writing up project results

Underused and highly effective. Write about what you built. Explain a paper you read. Document something confusing that you figured out. Even short posts on LinkedIn or a personal blog compound over time.

### Networking

- Reach out for informational interviews — ML engineers are more accessible than you think
- Referel is the goat

### Interview Preparation

ML engineering interviews typically test across four areas. Prepare for all of them:
- Reference: [Machine Learning Interviews Book](https://huyenchip.com/ml-interviews-book/) — Chip Huyen (free)

|Area|What Gets Tested|Resources|
|---|---|---|
|DSA / Coding|Arrays, trees, graphs, DP|LeetCode, InterviewBit|
|ML Theory|Bias-variance, loss functions, regularization, model selection|Andrew Ng courses, Burkov book|
|ML Coding|Implement algorithms from scratch|Deep ML, practice|
|System Design|Design a recommendation system, a search ranking model, etc.|Chip Huyen, ByteByteGo, HelloInterview|
|SQL|Window functions, joins, aggregations|StrataScratch, DataLemur|

### Job Search
---

## Part IV: Staying Current

This field is not mature, so it moves fast. Build a habit of following it.

### Papers
Reading papers is a ongoing skill 
- [Hugging Face Papers](https://huggingface.co/papers) — daily paper feed with community discussion
- [Arxiv Sanity](https://arxiv-sanity-lite.com/) — filtered arxiv for ML papers

### Communities
- [DeepLearning.AI community](https://www.deeplearning.ai/) — active and focused

### People to Follow
- Geoffrey Hinton, Andrej Karpathy, Andrew Ng, Francois Chollet
- Andrej Karpathy, Andrej Karpathy, François Chollet, Yann LeCun on Twitter/X — follow for field-level thinking

### Newsletters
- Follow and engage on Twitter/X and LinkedIn in the ML space
- [The Batch](https://www.deeplearning.ai/the-batch/) — Andrew Ng's weekly newsletter; good signal-to-noise ratio




## Part V. Reference Library

Roadmaps
- https://roadmap.sh/machine-learning

Courses
- [[Notes/msoc-2026-resource-list\|msoc-2026-resource-list]]
- https://www.deeplearning.ai/

Books
- https://huyenchip.com/ml-interviews-book/
- _Deep Learning_ — Goodfellow, Bengio, Courville
- _Pattern Recognition and Machine Learning_ — Bishop
- _Designing Machine Learning Systems_ — Chip Huyen
- _Mathematics for Machine Learning_ — Deisenroth et al.
- _The Hundred-Page Machine Learning Book_ — Burkov
- _Data Structures and Algorithms in Python_ by Michael T. Goodrich or _Introduction to Algorithms_ by Thomas Cormen et al..
- _A First Course in Probability_ by Sheldon Ross.
- _Machine Learning: A Probabilistic Perspective_ by Kevin P. Murphy
- _Information Theory, Inference, and Learning Algorithms_ by David MacKay. Free online version [here](http://www.inference.org.uk/itprnn/book.html).
- _Deep Learning_ by Ian Goodfellow, Yoshua Bengio, and Aaron Courville. Free online version [here](https://www.deeplearningbook.org/).
- _Introduction to Information Retrieval_ by Christopher D. Manning, Prabhakar Raghavan, and Hinrich Schütze. Essential for anyone interested in Natural Language Processing. Free online version [here](https://nlp.stanford.edu/IR-book/information-retrieval-book.html).
- _Reinforcement Learning: An Introduction_ by Richard S. Sutton and Andrew G. Barto. Essential for reinforcement learning. Free online version [here](http://incompleteideas.net/book/the-book-2nd.html).
- [OpenAI Spinning up in Deep Reinforcement Learning](https://spinningup.openai.com/en/latest/): A collection of articles that give great intuition for many RL algorithms. Highly recommended for anyone interested in RL.
- _Convex Optimization_ by Stephen Boyd and Lieven Vandenberghe. Super helpful but also super hard -- Stephen Boyd is basically a god. Free online version [here](https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf).
- _Mining of Massive Datasets_ by Jure Leskovec, Anand Rajaraman, and Jeff Ullman. This book is extremely relevant as machine learning is moving towards bigger models that use massive amounts of compute and data. Free online version [here](http://www.mmds.org/).
- Deep Learning with Hadoop & Apache Spark

- Place to find books: https://github.com/josephmisiti/awesome-machine-learning/blob/master/books.md

YouTube
- [https://youtu.be/hkagmGAu74Y?si=3SWoNZNsop2m1KGV](https://youtu.be/hkagmGAu74Y?si=3SWoNZNsop2m1KGV)  
- [https://youtu.be/wtolixa9XTg?si=dR1cZVJiCkLvMXpD](https://youtu.be/wtolixa9XTg?si=dR1cZVJiCkLvMXpD)

People
- https://huyenchip.com/
- https://www.andrewng.org/
- https://karpathy.ai/

Resources
- https://towardsdatascience.com/?s=deep+learning


# Draft Notes
Anything that I do not know where to place, belongs here.

Tips:
- Use LLMs to learn, not to copy. Have them explain concepts, quiz you, give you analogies. Generate your own code.
- Structured resources (courses, textbooks) over scattered YouTube videos as a default — but some YouTube content (Karpathy, 3Blue1Brown, StatQuest) is genuinely better than books for its specific topic. Use judgment.
- Depth in a few things beats surface familiarity with everything.
- Start reading research papers earlier than feels necessary. You do not need to understand everything. Build the habit.
- Start reading in general. You have to read a lot if you want a dope career in AI, whether its books/Textbooks, or dense research papers.
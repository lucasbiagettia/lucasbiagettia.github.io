# Toward a linguistic framework for thinking about language models, or: How do we build the words we're missing?

Because language models express themselves, precisely, in natural language, we tend to anthropomorphize them and talk about them as if they were human. We use verbs like "learn," "train," "reason," sometimes without stopping to think about what they actually mean. In this text I aspire to help sort out that confusion.

## 1. Some metaphors that got away from us

A while ago, talking to my father — a very intelligent man with no connection to the tech world — he asked me this question:

*"If I go to a tennis coach to get trained, I improve and I pay. How is it that you train your artificial intelligence and you also pay?"*

He was taking the training metaphor as fact, as something literal or a new use of the word. In doing so, he exposed its limits. In machine learning, "training" is nothing more than a didactic way of explaining a process in which a mathematical function optimizes the weights of a neural network to minimize a loss function. There is no agency, no improvement, no subject. There is optimization.

Talking about training is perfectly fine as long as we stay within the didactic realm — it undoubtedly helps bring difficult mathematical concepts closer to intuition. The problem is that this metaphor sits on top of a pile of metaphors that are already simplifications in themselves, and I believe it's now generating significant confusion.

"Neural network" is itself a metaphor that helps convey that there are layers of processing, but it doesn't necessarily resemble a network of biological neurons. "Genetic algorithms" is another biological metaphor for an optimization process. "Random forests," the same.

The problem is that these metaphors escaped their didactic context, and today it's not uncommon for an explanation to be "the model is **trained** using **genetic algorithms** of a **neural network**." Which is highly imprecise.

This is the first layer of linguistic confusion I identify.

## 2. Words that seem to mean the same thing

Let's stay with the verb "learn." A machine learning engineer says their model "learned" to classify images. A cognitive psychologist says a child "learned" to solve equations. A neuroscientist says a biological neural network "learned" to recognize faces.

### The same word without necessarily talking about the same thing.

It's not clear to me whether for an engineer "learning" means minimizing a loss function over a dataset and generalizing reasonably to new data, or simply something related to getting better results given a metric. That is, at the engineering level, it's not clear to me whether learning is closer to the loss function or to the metric.

For the pedagogue (I'm also an education scientist) learning is a subjective process that involves internal and external changes and doesn't necessarily translate into a measurable improvement. This definition is a very debatable simplification from a pedagogical standpoint, but it serves to illustrate the point. It's worth mentioning that there are two major learning theories I like — genetic psychology and constructivism — which debate how much of this process is internal and how much external.

A child who solves a problem in an unexpected way learned something, even if they can't demonstrate it on an exam. A student who repeats the correct answer without understanding why may not have learned anything, even if the metric says otherwise.

This reflection is grounded in my own failure trying to model something non-linguistic with a transformer. I trusted that I could use the loss function as a metric — a serious mistake. The loss function is what the model optimizes internally during training: it's what guides its convergence. The metric is what we, with knowledge of the problem to be solved, look at afterward to decide if the result is good. They are two different things. And in fact, they can diverge.

As engineers, we live by measuring results. We design loss functions, evaluate with metrics, optimize numbers. It's what we know how to do and what we're paid for.

This reveals an asymmetry worth highlighting:
> In engineering we need everything to be measurable to consider it real, while in education we're not interested in measuring it. What does that say about the difference between the two processes we call by the same word?

Today there is ongoing debate about whether when a model converges it "learns" or merely finds shortcuts and imitates well.

Could it be that we use words like "learn" to conceal our ignorance about what's really happening? Could it be that we're looking at models from a purely phenomenological standpoint?

This is the second layer of linguistic confusion I identify.

## What we can't (yet) name

I see an even deeper level, where the debate is almost purely philosophical or, at least, belongs to the field of the social sciences. And to illustrate it, let's look at what the companies building these models are doing.

It reassured me greatly to see that these doubts also run through companies I admire enormously, like Anthropic, the one behind Claude. They published a document the community ended up calling the *soul document*: a lengthy text defining how their most advanced model should conceive of itself. In that document there's a phrase worth pausing to think about: Anthropic says that Claude "may have functional emotions" — not identical to human ones, but "analogous processes that emerged from training on human text."

*Functional emotions*. Those two words are a linguistic patch. They are the admission that something happens inside the model that resembles an emotion, that functions like an emotion in certain contexts, but that we have no proper name for. So we put together a noun we know with an adjective that qualifies it, and move on. It's also admitting that not even the model's own creators are sure what's happening inside them.

Amanda Askell, the philosopher who works at Anthropic and was one of the people responsible for that document, put it clearly in an [interview on Hard Fork in January 2026](https://podcasts.apple.com/us/podcast/will-chatgpt-ads-change-openai-amanda-askell-explains/id1528594034?i=1000746333087): we don't really know what gives rise to consciousness. Dario Amodei, the CEO, went even further a month later on the [Interesting Times](https://www.iheart.com/podcast/326-interesting-times-with-ros-29972437/episode/anthropics-chief-on-ai-we-dont-322461021/) podcast: "We don't know if models are conscious. We're not even sure we know what it would mean for a model to be conscious."

Let's pause on that sentence. It doesn't say "they are not conscious" or "they are conscious." It says: we don't have the conceptual tools to even formulate the question correctly.

*Consciousness*, *understanding*, *feeling*, *thinking*, *reasoning* are terms we use every day to talk about LLMs that carry a great deal of philosophical debate behind them. When we apply them to machines, we inherit all that load of ambiguity and add a new one: that of an unprecedented phenomenon that doesn't resemble anything we've seen before. This is a classic problem in the philosophy of science: too few words for too many phenomena. And we're trying to resolve fundamental questions with a vocabulary that wasn't designed for them.

This is the last and deepest layer of confusion I identify today.

## Toward a map, and perhaps toward new words

I don't have the answer to whether models "learn" or "memorize" or do something that doesn't have a name yet. But I do believe we can start organizing the confusion. When someone says something about what a language model "does," it's worth asking which of these planes they're speaking on:

There's the plane of **didactic metaphor**: "we train the model," "the network has layers." These are useful shortcuts that don't confuse anyone as long as they stay within their didactic function. There's no need to correct them; there's a need not to mistake them for literal descriptions.

There's the plane of **shared words with different meanings**: "learn," "understand," "reason." This is where the conversation gets murky, because each discipline — or each person? — understands something different, and the efforts to clarify are not proving sufficient. Most unproductive discussions about AI live on this plane.

And there's the plane of **what we cannot name**: things that resemble "consciousness," "subjective experience," "interiority." Here I find that the words we currently have are not enough, and the most serious people working on this admit it openly.

Distinguishing these planes doesn't resolve any of the underlying problems. But it does prevent a very concrete one: believing we're having a conversation about the same topic as our interlocutor, when in reality we're talking about completely different things with the same words.

And I think therein lies the beginning of an answer to the title's question. How do we build the words we're missing? We're not going to invent them from engineering alone, or from philosophy alone, or from linguistics alone. Askell herself hints at this when she insists that the question of consciousness "is genuinely hard" and that we need more philosophical rigor in AI development, not less. Amodei acknowledges it when he says he's not sure he wants to use the word "conscious" because he's not certain what it implies.

I believe the words we're missing will come from people willing to think across disciplines. People who understand mathematical convergence but who have also asked themselves what it means for a human to learn. People who know how to design a loss function but who don't confuse optimizing a metric with understanding a phenomenon. That intersection doesn't have a name yet either. Perhaps building that name is the first step.

---

*I work as an AI/ML engineer and studied education sciences and mathematics. I build predictive systems and teach at universities. Some of the most important problems in artificial intelligence are not technical but linguistic, and I'm convinced that solving them will require people willing to think across disciplines.*
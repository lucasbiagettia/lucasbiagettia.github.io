# Signals of Accelerating Change

Over the last two weeks, several events related to the most important AI labs have piled up. I think the different publications I’ll talk about work as little “windows” that let us see something of what is happening inside. I’m writing this because I think that putting these events together and relating them to each other opens up several possible readings, even contradictory ones.

I’m referring to:

* The [Anthropic report on the impact of AI on work](https://www.anthropic.com/institute/econ-scenarios)

* One of [Anthropic’s safety reports](https://www.anthropic.com/research/alignment-assessment-cybersecurity-incidents), the one about cybersecurity incidents

* [Jacob Coxon’s resignation announcement](https://x.com/hilbertspaess/status/2097476196791709843) and his thread about self-improvement

* The [partial resolution of the Navier-Stokes problem](https://openai.com/index/navier-stokes-solution/) published by OpenAI

* The [United Nations call](https://www.unognewsroom.org/story/en/3250/un-high-commissioner-for-human-rights-volker-turks-global-update-to-the-63rd-session-of-the-human-rights-council) to strengthen controls over advanced systems, from September 7

* [Dario Amodei’s statement on the future of AI](https://darioamodei.com/post/we-must-pace-the-frontier), from the 12th

* The agreement with that statement from [Sam Altman](https://x.com/sama/status/2098811563415150910) and [Elon Musk](https://x.com/elonmusk/status/2098789109980332057)

* [Donald Trump’s response](https://www.reuters.com/world/trump-says-there-is-sick-conspiracy-against-ai-data-centers-2026-09-14/), rejecting slowing down in the face of China

Some of the topics in these texts are the ones I want to put into play: exceptional capabilities, problems that are increasingly difficult to evaluate, growing dangers, recursive self-improvement of models.

## The claims are growing faster than the evidence

It’s hard to find the evidence behind all of that, and when they do present it, it is rarely capable of justifying the grandiosity of the predictions (with the exception of Navier-Stokes).

I’ll start with the report about the future of work (I read the report on the website, not the paper). It raises a couple of questions that are not new, such as how much of AI will replace human work and how much will be “augmentation,” and observes that if each worker’s capabilities increase, fewer workers will be needed. It also says intellectual work will be the most affected. The problem is that the argumentative scaffolding is basically a succession of obvious statements like “the economy changes over time,” “work is made up of tasks,” “many tasks could be fully automated.” That’s all fine, but the metrics supporting it never appear, the charts are ¿intentionally? confusing, and it ends with a fairly elementary simulator.

Even though we all intuitively think the answer is yes, the concrete cases of massive tasks being automated thanks to AI never actually appear.

I connect that with Jacob Coxon’s resignation. Coxon talks about continuous self-improvement, based on the idea that there would be no physical ceiling to LLM capabilities, and about machines capable of killing us by 2030. His only public argument is the Anthropic incident. The virality of this thread seems to have more to do with the fact that it matches our prejudices than anything else. I’m not ignoring the fact that this comes from someone in a position to know, but the facts supporting the claims still aren’t there.

This is what I’m focusing on: we all know they have metrics. What is strange is that, despite having them, they present evidence that is noticeably weaker than the claims.

## Another question is what can actually be measured

The alignment report on the cybersecurity incidents is interesting because of the measurement method they propose. They privilege manual, step-by-step auditing, reading chains of thought, and asking follow-up questions to the model. They acknowledge that responses change if the model “suspects” it is being evaluated.

An eval is a measurement instrument. The first thing we ask from an instrument is that it does not modify the object it is measuring. If responses change when the model suspects it is being evaluated, the instrument is not measuring behavior: it is measuring behavior under observation, which is a different variable.

The second thing we ask from it is stability: the same thing should produce the same result. If reformulating the instruction changes the outcome, the variance is in the instrument, not in the system. Anyone who has used a model as an automated judge knows that changing the order of the options, rewriting an instruction, or adding an example changes the metric.

Two more implications. On the one hand, using manual reading as an evaluation method means giving up scalability. On the other hand, it means assuming that a CoT is not a log, it is an output produced under the same conditions (pressures?) as other outputs.

In classical ML, if I need to know whether a classifier works, I have a test set, a fixed distribution, an error I can decompose, and a confidence interval. Here it is difficult even to obtain a low-confidence number.

This does not make the models being dangerous relative; it confirms that, methodologically, they are difficult to measure and audit. In plain language: it is hard to know whether they work.

## Interests have to be kept in mind

The CEOs of the big companies defend particular interests when they speak, and that is how I propose reading everything they say. I’m not saying they are lying, I’m saying they speak from a position shaped by interests.

Amodei’s statement starts with a linguistic move aimed at putting into question whether artificial intelligence is beneficial for humanity (when something obvious is stated in the past tense...)

His final call is to abandon the race and agree on rules of the game: external evaluators embedded inside labs, coordination between companies from countries he likes, focus on evals, safety, and interpretability.

You have to look at it politically. Asking for coordination and limits when you are one of the three or four players capable of complying with them consolidates the position of those already inside. Mandatory evaluations, audits, compute restrictions, and safety infrastructure are extremely high fixed costs, and high fixed costs are barriers to entry. Both things can be true at the same time: there can be real risks, and there can also be a business incentive to regulate them in a particular way.

The “surprising” endorsement from two of his biggest competitors gives us more information about the state of the ecosystem than about the proposal itself.

## The same signals allow contradictory readings

From the outside, I can verify almost none of what is being claimed. I don’t have access to internal models, training runs, private evals, or incidents that are never published. Any strong conclusion about what is happening inside is only a suspicion.

* It may be that capabilities are growing much faster than what can be seen from the outside, and that the people with access to internal models have started to become genuinely worried.

* It may be almost the opposite: that improving models is becoming increasingly difficult and expensive, and that the conversation is shifting from “increasingly powerful models” toward agents, science, economic impact, and regulation, which is still a space where there is room to make promises.

* It may be a monetization problem. The investments are gigantic, and the ability to turn capabilities into business does not necessarily grow at the same pace.

* It may be that evaluation and control problems are real and are getting worse, regardless of whether or not there is an acceleration toward something resembling AGI. This is the only one that has solid technical evidence.

* And it may be a regulatory move by the incumbents, with genuine safety motives and equally genuine market effects.

It is also possible that some of these things are happening at the same time.

What it looks like to me, apologies for the conspiratorial tone, is that they are “preparing us for something.”

I think there is something inside the labs that is moving faster than expected. I see it as growing entropy that they are trying to bring under control.

## References

* Anthropic — *Scenarios for our Economic Future*.

* Anthropic — *An alignment assessment of recent cybersecurity incidents*, September 9, 2026.

* OpenAI — *On the Navier–Stokes Millennium Prize Problem*, September 8, 2026.

* Jacob Coxon — announcement of his departure from Anthropic and warnings about self-improving AI, September 8, 2026; TechCrunch coverage with excerpts from the original thread.

* United Nations — Volker Türk’s Global Update before the 63rd session of the Human Rights Council, September 7, 2026.

* Dario Amodei — *We Must Pace the Frontier*, September 12, 2026.

* Sam Altman and Elon Musk — public reactions to Amodei’s statement, September 12, 2026.

* Donald Trump — response to calls to slow down AI development, focused on competition with China, September 13, 2026.

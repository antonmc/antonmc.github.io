---
layout: post
category : iot
tagline: "Supporting tagline"
tags : [intro, beginner, jekyll, tutorial]
---
{% include JB/setup %}

Latley, I've been peeling back some layers on 'the internet of things', keen to understand more about how IoT systems are created.

A colleague of mine shared a git repo, and some great tutorial information for connecting TI sensortags with Bluemix. It's a really good introduction - so that's where I started too.

A TI sensortag is a relatively inexpensive little rectangle packed with electronic sensors. It can detect movement, changes in light and temperature. It is bluetooth enabled, and able to communicate its digital readings as data. 

It turns out to be a lot of rapid data. Fun to see is spill out of the little device.

As I began to dig into IoT, I was surprised, and to be honest, a little frustrated, at the amount of 'internet of things' jargon. I came across 'MQTT', and the 'IoT Foundation', as well as 'Node Red', and 'recipes'. It felt hard to know what to work with first. 

I guess it wouldn't be a modern technology without it's own jargon/culture, and while I'm learning, I've learned to pace myself too. It isn't essential to understand it all ... at least to begin with.

Connecting the sensortag to the cloud took only a few steps, but it is important to pay attention while you do it. 

Ryan's video and git repo cover the details, and now we've updated to work with the latest generation of TI sensortag ( like mine ) and regression tested with the previous generation too.

These are the broad 'human' steps to get set up ... I worked through these over a few evenings, trying to savour what was going on, and reading some of the code.

1. Order a sensortag
2. Download the TI app and see your data posted via your phone as a first step
3. Clone the repo
4. Follow the steps to publish sensor data from the device via your laptop
5. Follow the steps to subscribe to your data from the example apps

It felt great when I finally saw real data from the little sensortag appear in my web browser.

It inspired me to add a new example of my own, and I wanted to make an eye catching page, to use as a conversation starter when I talk about this technology with others. 

A few weeks ago, I came across a batch of fun Web GL 3D experiments. They were so well animated, they made me laugh - I have to confess that I kept returning to them - I'm (geekily) mesmerized by the characters, especially the birds, and amazed at how fast 3D technology is advancing in browsers. 

For a while I've been thinking about the potential for data inspired 3D visualizations, and I've been excitedly jotting down ideas in my notebook. It's another area that would take a little time to learn, but it occurred to me that it might be fun to start small, with a data/3D/IoT experiment - to try and control the 3D dragon and lion with sensor data, rather than with a mousepad.

I started really simply first of all by connecting the button data from the sensor to the dragon's sneeze, then moved on to connect the gyroscope data to rotate the dragon. The movement isn't calibrated with the sensor data in my example. It just reacts, based on general detection of directional impulse for now. I'd love to work on calibrating it, but I don't have the depth of math to back it up at the moment, and worry that the research and experimentaion might become an obsession. It is really addictive experimenting with this stuff!

When I was at a conference recently I noticed some little battery fans on a vendors booth, and that gave me the idea of connecting the temperature reader to the animated fan in the Lion animation, and using the little fan to cool it. 

Again the fan isn't very scientifically calibrated either - just general temperature change - and I've observed that even changes in temperature in the room can start the lion's fan spinning in my implementatioon - but I feel this is adequate to prove out the concept, and it's kind of fun to see that too - I mean, that interconnectedness feels part of the essence of IoT!

So, I was happy with the outcome of my experiment ( my teenage son joined in the obsession to help me integrate and test, and I loved hearing his ideas, factoring in them in and seeing how they worked, seeing his enthusiasm - it was a nice way for us to learn together, and a brilliant way to introduce programming logic to him ).

So this is all very well as a toy, or experiment ... 3D lions and dragons ... but what use is this in real life business? 

Well, for one thing, if the success of the Nest taught us anything, it taught us that not all sensor data has to look like a plain old line graph - there's enormous scope to bring data to life in an IoT context. 

Web GL, CSS and vector graphics are becoming more powerful all the time. And with the evolution of virtual reality, there's a whole new area of data science to work with. I am really impressed with the way the 3D animals are drawn. How quickly the transform when sneezing, or chilling, or moving. They're built on a library called three.js which has abstracted a lot of cool 3D theory into a simple but powerful API that puts 3D shapes on a stage, lights them, and binds in powerful rotation controls.

And then there's the case for IoT systems themselves. Perhaps that's more obvious. Another colleague of mine recently won a prize in a hackathon by using Node Red to connect water meter data from the Ottawa River through Bluemix. He's still experimenting too, but in this era of concern for water scarcity and quality, we can use this IoT driven data to learn from and to data drive decision making.

There's a fast blossoming eco system of smart connected devices around us. Having spent some time with the sensortag, Node Red and my dragon, and lion, er, 'guinea pigs', I feel that I understand it more, and hope to return to some deeper exploration in coming months. I hope my experiments help lure you in to this really interesting internet of things ;)
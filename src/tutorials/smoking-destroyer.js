// @flow
/* eslint max-len: 0 */
/* eslint react/jsx-curly-brace-presence: 0 */

import React from 'react'

import Link from '../components/Link'
import FbShareLink from '../components/FbShareLink'
import Markdown from '../components/Markdown'
import AnswersV2 from '../routes/tutorial/components/Answers-v2'
import type { Props } from '../routes/tutorial/components/toolPageProps'

export const tags = ['Smoking']
export const stepCount = 15
export const title = 'Smoking Destroyer'
export const nick = 'non smoker'
// eslint-disable-next-line prettier/prettier
export const description = 'Convert your old smoking habit into a powerful image of yourself'

const stillCompelled = (onRestart: Function) => {
  global.alert('Great, do it again and notice how much natural and more autoamtic it is this time')
  onRestart()
}

// eslint-disable-next-line react/prefer-stateless-function
class SmokingDestroyer extends React.Component {
  props: Props;

  render() {
    const {
      onShareWithAdam,
      myManLady,
      heShe,
      hisHer,
      himHer,
      renderStep,
      gender,
      onRestart,
      onGenderChange,
      onUserInputSubmit,
      onNext,
    } = this.props
    return (
      <div>
        {[
          <div>
            <Markdown
              className="tool-text"
              source={`
So ...
Been puffing away for too long eh?
            `}
            />
            <AnswersV2
              noBack
              onNext={onNext}
              answers={[
                { text: 'yes, yes I have', onClick: onNext },
                { text: 'shamefuly guilty your honor!', onClick: onNext },
                {
                  text: 'naaa, I kinda like it the way it is',
                  onClick: () =>
                    global.alert('so quit wasting my time will ya?! ^_^'),
                },
              ]}
            />
          </div>,

          <div>
            <Markdown
              className="tool-text"
              source={`
I'm going to walk you thru a simple process,
and in a few minutes from now
u will no longer engage in this unwanted old behavior.

Will you miss it?

I know it might seem ridiculous,
but this works extremely well if (and only if) you will not miss this old behavior.
`}
            />
            <AnswersV2
              onNext={onNext}
              answers={[
                {
                  onClick: onNext,
                  text: "lol what a silly question of course I won't miss it!",
                },
                { onClick: onNext, text: "I will not, let's continue" },
                {
                  onClick: () =>
                    global.alert('so quit wasting my time will ya?! ^_^'),
                  text: 'yes I will miss it',
                },
              ]}
            />
          </div>,

          <div>
            <Markdown
              className="tool-text"
              source={`
Fantastic.
Am I conversing with a lovely lady or a brave knight?

(or is it brave lady? or lovely knight? whatever you know what I mean!)
        `}
            />
            <form onSubmit={onUserInputSubmit} className="tool-form">
              <select
                className="select"
                value={gender}
                onChange={onGenderChange}
                required
              >
                <option value="">I&apos;m a ...</option>
                <option value="female">lovely lady</option>
                <option value="male">brave knight</option>
              </select>
              <button className="btn btn-primary">Let&apos;s continue</button>
            </form>
          </div>,

          <div>
            <Markdown
              className="tool-text"
              source={`
OK ${myManLady}, now bring your hand with your favorite cigarette close towards your face,
just as you normally used to in the past,
as you were about to inhale some of this sweet cancer.

Notice your reaction, and mark that image of your hand with the cigarette in your mind.
We'll use it soon.
`}
            />

            <AnswersV2
              onNext={onNext}
              answers={[
                { onClick: onNext, text: 'blah! me not like this image' },
                { onClick: onNext, text: "done. let's continue" },
              ]}
            />
          </div>,

          <div>
            <Markdown
              className="tool-text"
              source={`
Good.
now,
u know how sometimes you walk down the street,
and see someone happy as ${heShe} goes by ${hisHer} day,
and you see ${himHer} feeling good,
and does not have any problem.
${hisHer} life is still not perfect,
but at the moment ${heShe} seems grounded, balanced, and happy.

know what I'm talking about?
`}
            />
            <AnswersV2
              onNext={onNext}
              answers={[
                { onClick: onNext, text: 'yes I do!' },
                { onClick: onNext, text: 'sure this happens a lot' },
                { onClick: onNext, text: "It's rare but I do encounter it" },
              ]}
            />
          </div>,

          <div>
            <Markdown
              className="tool-text"
              source={`
Good, and how do YOU look like when your like that?

Picture a more evolved version of yourself,
to whom smoking is no longer an issue
(might even seem silly if you wish)

Got it?
`}
            />
            <AnswersV2
              onNext={onNext}
              answers={[
                { onClick: onNext, text: 'yes, I see my evolved version' },
                {
                  onClick: onNext,
                  text: `sure, I see myself in the image, for ${himHer} smoking is a joke!`,
                },
              ]}
            />
          </div>,

          <div>
            <Markdown
              className="tool-text"
              source={`
Now, make sure the image has no context,
so that there's nothing specific you do in that image,
and there's no specific location.

It's just you, without anything else in there.

Got it?
`}
            />
            <AnswersV2
              onNext={onNext}
              answers={[
                {
                  onClick: onNext,
                  text:
                    "yep, it's just me, for whom smoking is no longer an issue",
                },
                {
                  onClick: onNext,
                  text:
                    'yes, I see the evolved version without any context and location',
                },
              ]}
            />
          </div>,

          <div>
            <Markdown
              className="tool-text"
              source={`
Now make that image of your evolved self brighter, sharper, and bigger,
so you feel DRAWN to that image of yourself

Got it?

c how you can juice it up even more.

make it 3d, full of color, add depth, anything you can think of to make increase the desire to be that you in the picture.
`}
            />
            <AnswersV2
              onNext={onNext}
              answers={[
                {
                  onClick: onNext,
                  text:
                    "Yes! I've made it brighter sharper and bigger I'm drawn to myself in that image!",
                },
                { onClick: onNext, text: "Yes, I've made the changes" },
              ]}
            />
          </div>,

          <div>
            <Markdown
              className="tool-text"
              source={`
Great.
u are going to use this image in an interesting way.

In a moment I'll ask you to take your image from the previous step,
the one your drawn to, and shrink it down,
make it dim and colorless,
and kinda lock it into a tiny container,
like a self erecting tent.

OK do it now.

Got it?
`}
            />

            <AnswersV2
              onNext={onNext}
              answers={[
                {
                  onClick: onNext,
                  text:
                    'Yes, I shrinked the image of myself, made it colorless and dim, and locked it in the tiny container',
                },
                { onClick: onNext, text: "Got it, let's continue" },
              ]}
            />
          </div>,

          <div>
            <Markdown
              className="tool-text"
              source={`
Awesome.  
Now,

Remember the image of your hand with your favorite cig coming towards your face?

I want you to "plant" the tiny container somewhere in that hand image with the cig.

Make sure the container is small, and place it somewhere conspicious you cannot miss.

Got it?
`}
            />
            <AnswersV2
              onNext={onNext}
              answers={[
                {
                  onClick: onNext,
                  text:
                    'Yes. I placed the container in the image of my hand with the cig',
                },
                { onClick: onNext, text: "Got it. Let's continue" },
              ]}
            />
          </div>,

          <div>
            <Markdown
              className="tool-text"
              source={`
Fantastic.
Now here comes the fun part.

In a moment I'm gonna ask you do to something simple,
but don't do it until I tell you to

(promise? pinky promise? can I trust you${myManLady})

c that image of your hand with the cig, in which you planted the tiny container?

I want you to do two things simultaneously.

I want you to shrink the image of your hand with the cig,
make it colorless and dim,
and at the same time,
open the tiny container,
and make the image of your evolved self big, bright, colorful and sharp.

Take all the time you need to "set the stage",
and then do this AS FAST AS HUMANLY POSSIBLE,
in one quick "whiiisht!"

Ready?

Set ...

...

"whiiisht!"

Done?
          `}
            />
            <AnswersV2
              onNext={onNext}
              answers={[
                { onClick: onNext, text: 'Yea this is cool!' },
                { onClick: onNext, text: "that's interesting ..." },
              ]}
            />
          </div>,

          <div>
            <Markdown
              className="tool-text"
              source={`
Ok, now do this 3 times as fast as you can,
and between each time,
flash the screen,
kinda like turning the brightness up all the way in a tv you know?

Also, feel free to
indulge yourself a second or two
each time before flashing the screen,
as you feast your eyes on
that image of your evolved self :)

OK ready?

Aaaaaaaannnndd ...

GO!

3 times, as fast as you can!
`}
            />

            <AnswersV2
              onNext={onNext}
              answers={[
                { onClick: onNext, text: "Wowwza that's trippy!" },
                { onClick: onNext, text: "That's surprisingly feel good" },
                { onClick: onNext, text: "Done it 3 times, let's continue" },
              ]}
            />
          </div>,

          <div>
            <Markdown
              className="tool-text"
              source={`
Now do the same thing 7-10 times even FASTER,
and notice how it can
become more and more automatic and natural each time.

Ready?

GO!
`}
            />
            <AnswersV2
              onNext={onNext}
              answers={[
                { onClick: onNext, text: 'done it 7+ times, this is cool!' },
                { onClick: onNext, text: 'done and done' },
              ]}
            />
          </div>,

          <div>
            <Markdown
              className="tool-text"
              source={`
Brilliant!

Now take one of your favorite cigs,
place it in your hand,
and bring your hand towards your face,
and notice what's different than before,
and if there's any trace of your old behavior.
`}
            />
            <AnswersV2
              onNext={onNext}
              answers={[
                {
                  onClick: onNext,
                  text: 'Yuck! And to think I was once a smoker, blah!',
                },
                {
                  onClick: onNext,
                  text:
                    "That's interesting, the bright image of myself keeps poping up.",
                },
                {
                  onClick: () => stillCompelled(onRestart),
                  text:
                    "It's much better, but I still feel compelled to smoke.",
                },
              ]}
            />
          </div>,

          <div>
            <Markdown
              className="tool-text"
              source={`
Beautiful!

now, I have to make sure ...
Do you want me to revert you back to your old behavior?
`}
            />
            <AnswersV2
              onNext={onNext}
              answers={[
                {
                  onClick: onNext,
                  text: 'oh no! that will do just fine, thank you very much',
                },
                {
                  onClick: onNext,
                  text: "don't you dare Adam! I'll kick your ass!",
                },
                { onClick: onNext, text: 'lol, of course not :)' },
              ]}
            />
          </div>,

          <div>
            <Markdown
              className="tool-text"
              source={`
Didn't think so, I just like to be thorough ;)

Now, think about a situation that would have made you engage in the old
behavior, and notice what happens now.

In fact,
try in vain to make the old response come back.

Not so easy, is it?

go over all the scenarios that used to make you smoke in the
past, and notice how silly it all seems now.

Let me know when you're done, take your time, I can always work on my patience.

...

...

Done?
`}
            />
            <AnswersV2
              onNext={onNext}
              answers={[
                <FbShareLink>
                  This is Great! I want more to experience this!
                </FbShareLink>,
                <Link to={'/i-dont-charge-i-accept/'}>
                  This is beneficial. How can I give back to you Adam?
                </Link>,
                <Link to={'/tools/'}>
                  Cool! what other brain hacks can you teach me?
                </Link>,
                {
                  text: 'Thank you Adam, can I share with you my experience?',
                  onClick: onShareWithAdam,
                },
              ]}
            />
            <Markdown
              className="tool-source"
              source={`
Source: I've adapted this [tool](/tools/) from Bandler's Swish Pattern, see [Using Your Brain](http://amzn.to/2yLMhXz) chapter 9 for more info.
                `}
            />
          </div>,
        ].map(renderStep)}
      </div>
    )
  }
}

export default SmokingDestroyer

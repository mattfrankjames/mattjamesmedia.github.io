---
layout: post
title: Porting my site to Jekyll and GitHub pages
---
Unbeknownst to me, my hosting over at GoDaddy acquired some gnarly malware awhile back. To be fair to them, I kind of regard all their email as useless, so I'm sure they tried to inform me. That said, it was a bummer when an old WordPress site I kept around for no good reason managed to infect and take down everything I had set up on GoDaddy and an even bigger bummer when I was told I'd need to fork over a minimum of $80 to remedy the situation. Given that the convenience of staying with them despite their irritating sales tactics had now evaporated, I figured I might as well move this thing over to GitHub pages and go full [Jekyll](http://jekyllrb.com/).

Some of the pros:

1. Finally getting off FTP. It never really mattered to me on a personal site, but it's good to break that habit.
2. Keeping everything in markdown feels nice.
3. It's given me the opportunity to do some performance tuning from [Font Face Observer](https://github.com/bramstein/fontfaceobserver) to automating [Critical CSS](https://github.com/addyosmani/critical) to ripping out jQuery.
4. It's pretty fast:
![Google Page Speed Insights score 97/100](/img/googlePSI.png)

I've also employed the glorious fluid typography techinique I learned from [Mike Riethmuller](https://madebymike.com.au/writing/fluid-type-calc-examples/) at last year's CSS Dev Conf coupled with [system fonts](https://css-tricks.com/snippets/css/system-font-stack/) for body copy text. I'm really loving the way the type scales seamlessly with minimal media queries and system fonts tend to feel right on whatever environment I'm on. They're a bit heavy on macOS, but one thing at a time.

### Basic Fluid type snippet

    :root {
      font-size: 0.875rem;
      @media screen and (min-width: 20rem) {
        font-size: calc(0.875rem + 0.5 * ((100vw - 20rem) / 60));
      }
      @media screen and (min-width: 80rem) {
        font-size: 1.375rem;
      }
    }

Some of the cons:

1. I've lost some of the niceities from jQuery. Specifically, an easy to implement scrolling header, smooth scrolling to page regions and fade in fade out effects with, well, `fadeIn` and `fadeOut`.
2. I'm not really digging full page refreshes anymore. Clicking from a nav to different pages feels a bit antiquated at this point, despite the fact that it's still the paradigm for 99.999999% of the web. I'd much prefer some hot page region content swaps based on state or something similar, but you know, MVP and all.
3. I modified the default Jekyll theme, which I acknowledge is sub-optimal, and I need to dig out from under some of the cruft. Getting there though..

There's still plenty more to do. First of all, I need to get `https` figured out so I can drop a Service Worker in here. I have some work to do on the nav to make it a bit more robust on mobile for the majority of user expectations. I'd also be well served compartmentalizing the JS a bit and making the tooling set up a bit more refined versus the splatter paint approach I used to get this thing out the door.

And of course, there's a good case for a redesign, but all in good time. For now, though- Grid! Shape Outside! Font Face Observer! Fluid Type! Arrow functions! Cloudfare CDN!

Most importantly, I'm hoping the new set up inspires me to write more than once every 18 months. A few times a year would be a big win.

Thanks for reading.



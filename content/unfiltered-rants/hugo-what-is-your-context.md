+++
title = 'Hugo What Is Your Context???'
draft = true
date = 2024-02-18T16:46:18-07:00
+++

## The sitch

Hugo just pissed me off.

Their tutorials are a little lackluster in some areas and the only solution that seems to be supported to my problem is incredibly unergonomic

### A bit of explainer

the way everything works is with some magic "context" .
context gets overriden inside loops to make things like accessing those loops things easier
that's fine and all
but apparently, when you cross a partial template boundary, it loses access to global context (or more accurately, global context only means skip all locally introduced contexts)
so you have to do this ugly ass thing to pass the context in
{{ partial "post/info.html" (dict "page" . "context" $) }}
where I have to take the local context . (which is still needed) and nest it inside of a dictionary, and pass the context I wanted to pass along (the true global context) into another value in that dictionary
that also means that my wonderful post/info template now has... every fucking variable access prepended with .page which is infuriating
this is not without mentioning that the only way I could find any of this is in the forms and I feel like i'm not crazy for wanting to access supposedly global context ya know, fucking globally????
oh and don't forget i have to do this for every place I use the info template because of course the types need to match because it's not just dynamic, it's shitty dynamic

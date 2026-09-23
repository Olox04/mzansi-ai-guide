# Mzansi AI Guide

Build Mzansi Travel AI — Chatbot-Focused AI Travel Assistant

Build a modern, responsive web application called Mzansi Travel AI.

Tagline

Your AI travel companion for South Africa.

Supporting tagline

Ask. Discover. Explore South Africa.

This is a university group project prototype demonstrating how AI can assist tourists travelling to South Africa.

1. MAIN PURPOSE

The website must now be primarily focused on the AI chatbot.

The chatbot is the central feature and should immediately be visible and accessible when a visitor opens the website.

Mzansi Travel AI should allow visitors to ask natural-language questions about:

South African destinations

Attractions

Activities

Food

Transport

Currency

Culture

General travel information

Safety information

Travel planning

Frequently asked questions

The goal is to make the website feel like an AI travel assistant, rather than a traditional tourism website.

2. IMPORTANT SIMPLIFICATION

Remove unnecessary features that distract from the chatbot.

Remove for now:

Login

Sign Up

Logout

User profiles

Saved trips

Saved itineraries

Previous chat history tied to accounts

Authentication pages

Large destination image galleries

Large tourism photography sections

Destination-heavy homepage

User dashboards

Complex database relationships for users

Profile management

Do not create authentication at this stage.

The application should be usable immediately by anyone who visits the website.

A visitor should be able to open the website and start using the chatbot without creating an account.

3. MAIN NAVIGATION

Create a simple navigation bar.

Logo:

Mzansi Travel AI

Navigation:

Home

AI Chat

Explore

Trip Planner

FAQ

About

Primary button:

Ask AI

Do NOT display:

Login

Sign Up

Profile

Logout

The navigation should remain simple because the chatbot is the primary purpose of the application.

4. HOMEPAGE

Redesign the homepage so that the chatbot is the main focus.

Do NOT create a large tourism landing page filled with destination images.

Instead, create a clean AI-product-style homepage.

Hero heading

Explore South Africa with AI

Subheading

Ask Mzansi AI about destinations, food, culture, transport, activities and travel tips across South Africa.

Primary button:

Start Chatting

Secondary button:

Explore South Africa

5. CHATBOT SHOULD BE THE MAIN FEATURE

The chatbot should be the most visually prominent component on the website.

Ideally, the homepage should contain a large chatbot interface directly below or integrated into the hero section.

The user should immediately understand:

"This website is an AI travel assistant."

The chatbot should look similar to a modern AI assistant interface.

6. AI CHAT PAGE

Create a dedicated AI Chat page.

This should be the most polished page in the entire application.

Chat header

Mzansi Travel AI

Status:

🟢 Travel Assistant Online

Welcome message

Display:

👋 Welcome to South Africa! I'm Mzansi Travel AI, your virtual travel companion. Ask me anything about travelling around South Africa, from destinations and food to transport, activities and local culture.

7. CHAT INTERFACE

Create a large conversational interface.

The user must be able to:

Type questions

Send messages

Receive AI responses

Ask follow-up questions

See previous messages during the current session

Start a new conversation

Clear the conversation

Use suggested questions

Add a typing/loading animation while the AI is generating a response.

Automatically scroll to the newest message.

Allow the user to press Enter to send.

The interface must work well on both desktop and mobile.

8. SUGGESTED QUESTIONS

Display suggested questions underneath the welcome message.

Use clean clickable buttons/cards.

Examples:

🇿🇦 What should I see in Cape Town?

🦁 Where can I go on safari?

🍽️ What South African food should I try?

🚗 How can I travel around South Africa?

☀️ When is the best time to visit?

💰 What currency does South Africa use?

🏙️ What should I do in Johannesburg?

🏖️ What are some good beaches to visit?

When a user clicks one, automatically send that question to the chatbot.

9. CHATBOT KNOWLEDGE

The chatbot should have knowledge about:

Destinations

Cape Town

Johannesburg

Durban

Pretoria

Stellenbosch

Garden Route

Kruger National Park

Drakensberg

Gqeberha

Hermanus

Attractions

Table Mountain

Robben Island

V&A Waterfront

Boulders Beach

Cape Winelands

Kruger National Park

Apartheid Museum

Gold Reef City

uShaka Marine World

Blyde River Canyon

Activities

Safari

Hiking

Beaches

Wine tasting

Whale watching

Cultural experiences

Scenic drives

Adventure activities

Food experiences

Food

Bobotie

Braai

Bunny chow

Boerewors

Malva pudding

Koeksisters

Vetkoek

Cape Malay cuisine

General travel information

South African currency

Transport

Major airports

Climate

Plug/electrical information

Time zone

Cultural etiquette

Emergency information

General safety advice

10. CHATBOT RESPONSE BEHAVIOUR

The chatbot should respond naturally rather than simply returning database records.

For example:

User

"What should I do in Cape Town?"

AI

Provide a concise but useful response mentioning relevant attractions and activities.

Then ask a follow-up such as:

"How many days will you be staying? I can suggest a simple itinerary."

The AI should encourage conversation.

11. TRAVEL PLANNING THROUGH CHAT

Instead of building a complicated standalone trip-planning system, allow the chatbot to handle most travel planning.

For example:

User:

"I have 5 days in South Africa and I like beaches, food and nature."

The AI should be able to suggest a basic itinerary.

User:

"Make it cheaper."

The AI should adapt the suggestion.

User:

"I am travelling with my family."

The AI should adapt again.

This makes the chatbot feel intelligent and useful.

12. EXPLORE PAGE

Keep an Explore page, but make it much simpler than the original design.

Do NOT create a large image-based tourism catalogue.

Instead, create clean information cards.

Categories:

Destinations

Cape Town, Johannesburg, Durban, etc.

Activities

Safari, beaches, hiking, food, wine, culture, etc.

Food

Bobotie, braai, bunny chow, boerewors, etc.

Travel Information

Currency, transport, climate, culture and safety.

Each card should have:

Name

Short description

Icon

Ask AI button

The Ask AI button should open the chatbot and automatically enter an appropriate question.

Example:

Cape Town

"What are the best things to do in Cape Town?"

13. REMOVE LARGE DESTINATION IMAGES

Do NOT make images a major part of the website.

Avoid:

Full-screen destination photographs

Large image banners

Image galleries

Multiple photographs per destination

Image-heavy destination cards

Use icons, subtle illustrations, simple graphics and text-based cards instead.

The application should feel more like an AI technology platform than a tourism photography website.

If images are used, keep them minimal and purposeful.

14. FAQ PAGE

Keep the FAQ page but make it simple.

Categories:

General

What currency does South Africa use?

What languages are spoken?

What time zone is South Africa in?

Destinations

What can I do in Cape Town?

Where can I go on safari?

What should I see in Johannesburg?

Food & Culture

What South African food should I try?

What is a braai?

What is bunny chow?

Transport

How can I travel between cities?

How can I get around Cape Town?

Safety

What should tourists know about safety?

What should I do in an emergency?

Every FAQ should have an:

Ask AI

button.

Clicking it should open the chatbot with the relevant question.

15. ABOUT PAGE

Create a simple About page.

About Mzansi Travel AI

Mzansi Travel AI is an AI chatbot prototype designed to assist international tourists visiting South Africa.

The system demonstrates how conversational AI can make travel information easier to access through a simple natural-language interface.

The Problem

Tourists often need to search through multiple websites to find information about destinations, activities, transport, food and culture.

The Solution

Mzansi Travel AI provides one conversational interface where tourists can ask questions naturally and receive relevant travel information.

Future Possibilities

The project could eventually integrate:

Maps

Currency conversion

Flight information

Hotel information

Restaurant information

Booking systems

Official tourism APIs

Multilingual support

16. SAFETY AND ACCURACY

The AI must not invent information.

For information that changes frequently, such as:

Visa requirements

Immigration requirements

Border rules

Flight information

Exchange rates

Safety alerts

Travel advisories

Current travel restrictions

The chatbot should tell users to verify the latest information using official sources.

Do not present outdated information as current.

If the AI does not know something, it should say so.

17. DESIGN

Use a modern AI-tech + South African travel aesthetic.

Main colours:

Deep green

Gold/yellow

Warm white

Dark charcoal

Use:

Rounded cards

Modern typography

Subtle shadows

Smooth animations

Clean spacing

Modern icons

Chat bubbles

AI-style interface elements

Avoid excessive use of South African flags.

Avoid making the website look like a traditional travel agency.

The visual identity should communicate:

AI + Travel + South Africa

18. CHATBOT VISUAL PRIORITY

The visual hierarchy should be:

1. AI Chatbot

Most important.

2. Ask AI CTA

Immediately visible.

3. Travel information

Destinations, food, activities and transport.

4. Explore

Supporting feature.

5. FAQ

Supporting feature.

6. About

Informational feature.

Do not allow secondary pages to visually overpower the chatbot.

19. DEMONSTRATION FLOW

The website must support this simple university demonstration.

Step 1

Visitor opens:

Mzansi Travel AI

Step 2

They immediately see:

Explore South Africa with AI

and the chatbot.

Step 3

They click:

Start Chatting

Step 4

They ask:

"What should I do in Cape Town?"

Step 5

The AI responds with useful information.

Step 6

They ask:

"What about food?"

Step 7

The AI responds with South African food recommendations.

Step 8

They ask:

"I only have 3 days. Can you create an itinerary?"

Step 9

The AI generates a simple itinerary.

Step 10

They open Explore to browse additional information.

Step 11

They return to AI Chat and continue the conversation.

There should be no requirement to log in or create an account anywhere in this demonstration.

20. RESPONSIVE DESIGN

The website must work properly on:

Desktop

Laptop

Tablet

Mobile

The chatbot is particularly important on mobile.

On mobile:

Chat should use almost the full available screen

Input should remain easy to access

Suggested questions should be horizontally scrollable or stacked

Buttons should be touch-friendly

Navigation should use a hamburger menu

21. ACCESSIBILITY

Implement:

Keyboard navigation

Accessible buttons

Proper form labels

Good colour contrast

Visible focus states

Responsive typography

ARIA labels where appropriate

22. ERROR AND LOADING STATES

The chatbot must clearly show:

Loading state

AI typing indicator

Failed request

Empty conversation

Network/API error

Example:

"I'm having trouble connecting right now. Please try again."

Never leave the user wondering whether their question was submitted.

23. SECURITY

If an external AI API is used:

Never expose API keys in frontend code.

Use secure environment variables.

Use Base44 secure secrets where available.

Keep private credentials on the backend.

24. IMPORTANT: DO NOT OVERBUILD

Do not add unnecessary features simply to make the application larger.

This project is intentionally focused on demonstrating:

A functional AI tourism chatbot.

Prioritise functionality and user experience over the number of pages.

25. FINAL PAGE STRUCTURE

The final application should contain approximately:

Home

AI-focused landing page + chatbot introduction.

AI Chat

Full chatbot interface.

Explore

Simple text/icon-based tourism information.

Trip Planner

A lightweight page explaining that users can generate itineraries through AI, with a button to start chatting.

FAQ

Simple expandable questions + Ask AI buttons.

About

Project information.

Do NOT include:

Login

Sign Up

Profile

Saved Trips

User Dashboard

Authentication

Large destination image galleries

26. FINAL GOAL

The final application should immediately communicate:

"This is an AI chatbot that helps tourists understand and explore South Africa."

The chatbot must be the heart of the application.

The website should feel:

Modern

Simple

Intelligent

Professional

Easy to explore

AI-focused

South African

Mobile-friendly

The most important requirement is:

MAKE THE AI CHATBOT FUNCTIONAL.

Do not build a collection of static mockup pages.

The final product should demonstrate a clear AI tourism use case with a working conversational interface.

Product

Mzansi Travel AI

Tagline

Your AI travel companion for South Africa.

Core purpose

Ask questions. Get travel information. Plan your South African adventure with AI.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/be8388e4-729d-49c3-b154-aa627af7ac42).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

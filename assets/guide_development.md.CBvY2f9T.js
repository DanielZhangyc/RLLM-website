import{_ as s,c as a,a0 as i,o as t}from"./chunks/framework.P9qPzDnn.js";const u=JSON.parse('{"title":"Development","description":"","frontmatter":{},"headers":[],"relativePath":"guide/development.md","filePath":"guide/development.md"}'),n={name:"guide/development.md"};function l(p,e,o,r,d,c){return t(),a("div",null,e[0]||(e[0]=[i(`<h1 id="development" tabindex="-1">Development <a class="header-anchor" href="#development" aria-label="Permalink to &quot;Development&quot;">​</a></h1><p>This guide will help you set up your development environment and get started with RLLM development.</p><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2><ul><li>Xcode 15.0+</li><li>iOS 17.0+</li><li>Swift 5.0+</li></ul><h2 id="dependencies" tabindex="-1">Dependencies <a class="header-anchor" href="#dependencies" aria-label="Permalink to &quot;Dependencies&quot;">​</a></h2><p>RLLM uses the following major dependencies:</p><ul><li><a href="https://github.com/nmdias/FeedKit" target="_blank" rel="noreferrer">FeedKit</a> - RSS and Atom feed parser</li><li><a href="https://github.com/Alamofire/Alamofire" target="_blank" rel="noreferrer">Alamofire</a> - HTTP networking library</li></ul><h2 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Getting Started&quot;">​</a></h2><ol><li>Clone the repository</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/DanielZhangyc/RLLM.git</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> RLLM</span></span></code></pre></div><ol start="2"><li>Open the project in Xcode</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">open</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> RLLM.xcodeproj</span></span></code></pre></div><ol start="3"><li>Build and run the project in Xcode</li></ol><h2 id="project-structure" tabindex="-1">Project Structure <a class="header-anchor" href="#project-structure" aria-label="Permalink to &quot;Project Structure&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>RLLM/</span></span>
<span class="line"><span>├── Sources/</span></span>
<span class="line"><span>│   ├── App/          # App entry point and configuration</span></span>
<span class="line"><span>│   ├── Models/       # Data models</span></span>
<span class="line"><span>│   ├── Views/        # SwiftUI views</span></span>
<span class="line"><span>│   ├── Services/     # Business logic and services</span></span>
<span class="line"><span>│   └── Utils/        # Utility functions and extensions</span></span>
<span class="line"><span>├── Tests/            # Unit and UI tests</span></span>
<span class="line"><span>└── Resources/        # Assets and resources</span></span></code></pre></div><h2 id="api-keys" tabindex="-1">API Keys <a class="header-anchor" href="#api-keys" aria-label="Permalink to &quot;API Keys&quot;">​</a></h2><p>RLLM requires API keys for the following services:</p><ul><li>Anthropic Claude</li><li>Deepseek</li><li>OpenAI</li></ul><p>You can configure these API keys in the app settings. For development, you can add them directly in the code:</p><ol><li>Open <code>Sources/App/Config.swift</code></li><li>Add your API keys to the appropriate constants</li></ol><div class="warning custom-block"><p class="custom-block-title">Note</p><p>Never commit your API keys to version control. Make sure to keep them secure and private.</p></div>`,21)]))}const g=s(n,[["render",l]]);export{u as __pageData,g as default};

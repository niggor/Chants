define(function () { return function (__fest_context){"use strict";var __fest_self=this,__fest_buf="",__fest_chunks=[],__fest_chunk,__fest_attrs=[],__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn,__fest_html="",__fest_blocks={},__fest_params,__fest_element,__fest_debug_file="",__fest_debug_line="",__fest_debug_block="",__fest_htmlchars=/[&<>"]/g,__fest_htmlchars_test=/[&<>"]/,__fest_short_tags = {"area":true,"base":true,"br":true,"col":true,"command":true,"embed":true,"hr":true,"img":true,"input":true,"keygen":true,"link":true,"meta":true,"param":true,"source":true,"wbr":true},__fest_element_stack = [],__fest_htmlhash={"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"},__fest_jschars=/[\\'"\/\n\r\t\b\f<>]/g,__fest_jschars_test=/[\\'"\/\n\r\t\b\f<>]/,__fest_jshash={"\"":"\\\"","\\":"\\\\","/":"\\/","\n":"\\n","\r":"\\r","\t":"\\t","\b":"\\b","\f":"\\f","'":"\\'","<":"\\u003C",">":"\\u003E"},___fest_log_error;if(typeof __fest_error === "undefined"){___fest_log_error = (typeof console !== "undefined" && console.error) ? function(){return Function.prototype.apply.call(console.error, console, arguments)} : function(){};}else{___fest_log_error=__fest_error};function __fest_log_error(msg){___fest_log_error(msg+"\nin block \""+__fest_debug_block+"\" at line: "+__fest_debug_line+"\nfile: "+__fest_debug_file)}function __fest_replaceHTML(chr){return __fest_htmlhash[chr]}function __fest_replaceJS(chr){return __fest_jshash[chr]}function __fest_extend(dest, src){for(var i in src)if(src.hasOwnProperty(i))dest[i]=src[i];}function __fest_param(fn){fn.param=true;return fn}function __fest_call(fn, params,cp){if(cp)for(var i in params)if(typeof params[i]=="function"&&params[i].param)params[i]=params[i]();return fn.call(__fest_self,params)}function __fest_escapeJS(s){if (typeof s==="string") {if (__fest_jschars_test.test(s))return s.replace(__fest_jschars,__fest_replaceJS);} else if (typeof s==="undefined")return "";return s;}function __fest_escapeHTML(s){if (typeof s==="string") {if (__fest_htmlchars_test.test(s))return s.replace(__fest_htmlchars,__fest_replaceHTML);} else if (typeof s==="undefined")return "";return s;}try{var json = {title: 'Game', 'backbutton': true };}catch(e){__fest_log_error(e.message);}__fest_buf+=("<div class=\"b-game-page b-default-hidden-page\">");var __fest_context0;try{__fest_context0=json}catch(e){__fest_context0={};__fest_log_error(e.message)};(function(__fest_context){var json=__fest_context;__fest_buf+=("<div class=\"title\">");try{__fest_if=json.backbutton}catch(e){__fest_if=false;__fest_log_error(e.message);}if(__fest_if){__fest_buf+=("<div class=\"title__backbutton\"><a href=\"#main\" class=\"b-return-back__button\">￩Back</a></div>");}__fest_buf+=("<div class=\"title__game-title\">Cha-a-ants!</div></div><div class=\"b-page-title\">");try{__fest_buf+=(json.title)}catch(e){__fest_log_error(e.message + "12");}__fest_buf+=("</div>");})(__fest_context0);__fest_buf+=("<style>body { font: 14pt \'Alike\', sans-serif;}\n\t\t#note { font-size: 164px; }\n\t\t.droptarget { background-color: #348781}\n\t\tdiv.confident { color: black; }\n\t\tdiv.vague { color: lightgrey; width: 500px}\n\t\t#note { display: inline-block; height:180px; text-align: left;}\n\t\t\n\t\t#detector { width: 300px; height: 300px; border: 4px solid gray; border-radius: 8px; text-align: center; padding-top: 10px;}\n\t\t#output { width: 300px; height: 42px; }\n\t\t#flat { display: none; }\n\t\t#sharp { display: none; }\n\t\t.flat #flat { display: inline; }\n\t\t.sharp #sharp { display: inline; }</style><div class=\"b-game-page__winner\"><span>Winner:</span><span class=\"b-game-page__winner__winner-name\"></span></div><div class=\"b-game-page__gameplay\"><button class=\"b-game-page__start-button\">start</button><div id=\"detector\" class=\"vague\"><div class=\"pitch\"><span id=\"pitch\">--</span>Hz</div><div class=\"note\"><span id=\"note\">--</span></div><div id=\"detune\"><span id=\"detune_amt\">--</span><span id=\"flat\">cents ♭</span><span id=\"sharp\">cents ♯</span></div></div></div></div>");__fest_to=__fest_chunks.length;if (__fest_to) {__fest_iterator = 0;for (;__fest_iterator<__fest_to;__fest_iterator++) {__fest_chunk=__fest_chunks[__fest_iterator];if (typeof __fest_chunk==="string") {__fest_html+=__fest_chunk;} else {__fest_fn=__fest_blocks[__fest_chunk.name];if (__fest_fn) __fest_html+=__fest_call(__fest_fn,__fest_chunk.params,__fest_chunk.cp);}}return __fest_html+__fest_buf;} else {return __fest_buf;}} ; });
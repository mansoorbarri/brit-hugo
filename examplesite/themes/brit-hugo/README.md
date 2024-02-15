# brit-hugo
A hugo theme inspired by brittanychiang.com

## Setup 

make a test site 
```
hugo new site test-brithugo
```

cd & clone the theme 
```
cd && test-brithugo && git clone https://github.com/mansoorbarri/brit-hugo themes/brit-hugo
```

copy `config.toml`
```
cp themes/brit-hugo/examplesite/config.toml . 
``` 

run at localhost 
```
hugo server 
```

## Code standards
### General 

- use descriptive `tag`, `class` or any other identifable property 
- css properties should be in alphabetical order. For example: 

**Good example:**
```css
.element { 
	color: grey; 
	display: flex; 
	text-decoratoin: none; 
} 
```

**Bad example:**
```css
.element { 
	text-decoratoin: none;
	display: flex; 
	color: grey; 
} 
```

### Pushing code: 
use: `add`, `update` or `remove` as the commit message. Like: 
```
commit -m "update: README.md" 
```

![](/_internal/commit-message.png)

---

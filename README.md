## 🏋️ GymPricing

**Explore gym membership plans and find the right fitness package for your goals.**

🔗 **Live Demo:** https://gympricing-hub.surge.sh/





## Structure

```
src > component >

DaisyNav> DaisyNav.jsx

Navbar > Navbar.jsx , Link.jsx

PricingOptions > PricingOptions.jsx

PricingCard > PricingCard.jsx


```




### Flow

Create project :
npm create vite@latest my-vue-app -- --template vue
cd tailwind-react-pricing
npm install tailwindcss @tailwindcss/vite

Import : (vite.config.js)
import tailwindcss from '@tailwindcss/vite'

Plugin : 
(vite.config.js)

App.css :
@import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&family=Manrope:wght@200..800&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Outfit:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import "tailwindcss";
body {
  font-family: "Poppins", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}


Command :
npm i -D daisyui@latest

App.css:
@plugin "daisyui";


Icons : Lucide icons / (react icons) npm i react-icons
npm install lucide-react (Must be lucide-react)

To confirm lucide installed : package.json 

```json
"dependencies": {
    "@tailwindcss/vite": "^4.3.3",
    "lucide-react": "^1.58.0",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "tailwindcss": "^4.3.3"
  },
```

































<details>
<summary>3 Ways to use <summary>

```
import React from 'react';
import Link from './Link';

const navItems = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Projects", path: "/projects" },
    { id: 5, name: "Contact", path: "/contact" }
];
const Navbar = () => {
    return (
        <nav>

            {/* Way - 03 (Component) */}
            <ul className='flex'>
                {
                    navItems.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>



            {/* Way - 02 */}
            {/* <ul className='flex'>
                {
                    navItems.map(route => <li className='mr-10'>
                        <a href={route.path}>{route.name}</a>
                    </li>)
                }
            </ul> */}


            {/* Way - 01 */}
            {/* <ul className='flex'>
                <li className='mr-10'><a href="">Home</a></li>
                <li className='mr-10'><a href="">Contact</a></li>
                <li className='mr-10'><a href="">About</a></li>
                <li className='mr-10'><a href="">Blog</a></li>
                <li className='mr-10'><a href="">More</a></li>
            </ul> */}
        </nav>
    );
};

export default Navbar;
```
```
import React from 'react';

const Link = ({ route }) => {
    return (
        <li className='mr-10'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;
```

</details>






### Toggle
```
const [open, setOpen] = useState(false)

    const handleMenuBar = () => {
        setOpen(!open)
    }

<span className='flex gap-2 items-center'>
     // <span onClick={() => handleMenuBar(setOpen(!open))}
            <span onClick={() => handleMenuBar()}
                className='md:hidden'>
                    {open ? <Menu></Menu> : <X></X>}
            </span>
            <h3 className=' text-xl font-bold'>Fitness</h3>
        </span>
```



### to make pricing card
- genaate array of object json foramto
- in public foler >> pricingData.json >> paste

- spinner fallback

-  pricingData.json kivabe niye asbo App.jsx e ?

```
const pricingPromise = fetch('pricingData.json').then(res => res.json())

<Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
</Suspense>


const PricingOptions = ({ pricingPromise }) => {}
```



###  Features card er width subcribe button porjonto soman korte cahile:

```
<div className='features flex-1'>
    {
     features.map((feature, index) => <p key={index}>{feature}</p>)
    }
</div>
```

or, 
```
<div className='features flex-1'>
                    {
                        features.map((feature, index) => <PricingFeatures
                            key={index}
                            feature={feature}></PricingFeatures>)
                    }
                </div>
```


### to use check icon


```
const PricingFeatures = ({ feature }) => {
    return (
        <p className='flex'>
            <Check className='w-[15px] mr-2 text-green-400'></Check> {feature}
        </p>
    );
};
```



### Li customize

```
<ul className="flex-1 mt-6 flex flex-col gap-2 text-xs">
    {
        features.map((feature, index) =>
            <li key={index}>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>{feature}</span>
            </li>)
    }
</ul>


{/* <span className="badge badge-xs badge-warning"></span> */}
{popular && <span className="badge badge-xs badge-warning">Most Popular</span>}
```










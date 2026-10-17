## 💪🏻 GymPlans

**Explore gym membership plans and find the right fitness package for your goals.**

**Live Demo:** https://gym-plans.surge.sh/



#### 📁 Project Structure

```
gym-plans/
├── public/
│   └── gymData.json
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── DaisyNav/
│   │   │   └── DaisyNav.jsx
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Link.jsx
│   │   ├── Banner/
│   │   │   └── Banner.jsx
│   │   ├── PricingOptions/
│   │   │   └── PricingOptions.jsx
│   │   ├── PricingCard/
│   │   │   └── PricingCard.jsx
│   │   ├── ResultsChart/
│   │   │   ├── ResultsChart.jsx
│   │   │   └── GymPieChart.jsx
│   │   ├── GymChartAxios/
│   │   │   └── GymChart.jsx
│   │   └── Footer/
│   │       └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

<br>





### ⚙️ Project Setup

Create a new React project using Vite and move into the project directory.

```bash
npm create vite@latest gym-plans -- --template react
cd gym-plans
npm install
npm install tailwindcss @tailwindcss/vite
```

#### 📌 Tailwind CSS Setup

Install Tailwind CSS and its Vite plugin to style the application with utility classes.

```bash
npm install tailwindcss @tailwindcss/vite
```

**Import the plugin** in `vite.config.js`:

```js
import tailwindcss from '@tailwindcss/vite'
```

**Register the plugin** in the `plugins` array in `vite.config.js`:

```js
plugins: [
  react(),
  tailwindcss(),
]
```

#### 📌 DaisyUI Setup

Install DaisyUI to use ready-made UI components and themes alongside Tailwind CSS.

```bash
npm i -D daisyui@latest
```

**Add the plugin** to `src/App.css`:

```css
@import "tailwindcss";
@plugin "daisyui";
```

#### 📌 Font Setup

Import the Google Fonts used in the project and set Poppins as the default font.

**In `src/App.css`:**

```css
@import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&family=Manrope:wght@200..800&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Outfit:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

@import "tailwindcss";
@plugin "daisyui";

body {
  font-family: "Poppins", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
```

#### 📌 Icon Library Setup

Install Lucide React for clean, customizable icons throughout the interface.

```bash
npm install lucide-react
```

Alternatively, install React Icons if you need icons from multiple icon libraries.

```bash
npm i react-icons
```

**Verify installation:** Check `package.json` to confirm the required package appears under `dependencies` or `devDependencies`.

```json
"dependencies": {
    "@tailwindcss/vite": "^4.3.3",
    "lucide-react": "^1.58.0",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "tailwindcss": "^4.3.3"
  },
```


#### 📌 Recharts Setup

Install Recharts to build interactive charts and visualize gym activity, membership plans, and statistics.

```bash
npm install recharts
```

Use components such as `BarChart`, `LineChart`, `PieChart`, and `ResponsiveContainer` to create responsive data visualizations.




#### 📌 Axios Setup

Install Axios to make HTTP requests, fetch API data, and manage gym membership information.

```bash
npm install axios
```


<br><br>













### || `Working Flow`

#### 📌 Three Ways to Render Navigation Links in React

<details>
<summary>Way 01 — Static Navigation Links</summary>

Write each navigation item manually using `li` and `a` elements.

```jsx
<ul className="flex">
    <li className="mr-10"><a href="/">Home</a></li>
    <li className="mr-10"><a href="/about">About</a></li>
    <li className="mr-10"><a href="/services">Services</a></li>
    <li className="mr-10"><a href="/projects">Projects</a></li>
    <li className="mr-10"><a href="/contact">Contact</a></li>
</ul>
```

</details>

<details>
<summary>Way 02 — Dynamic Navigation with map()</summary>

Store navigation items in an array of objects and use `map()` to render the links dynamically.

**Navbar.jsx**

```jsx
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
            <ul className="flex">
                {navItems.map(route => (
                    <li key={route.id} className="mr-10">
                        <a href={route.path}>{route.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
```

</details>

<details>
<summary>Way 03 — Dynamic Navigation Using a Reusable Component</summary>

Create a separate `Link.jsx` component to render each navigation item. This keeps the `Navbar.jsx` code clean and organized.

**Navbar.jsx**

```jsx
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
            <ul className="flex">
                {navItems.map(route => (
                    <Link key={route.id} route={route} />
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
```

**Link.jsx**

```jsx
const Link = ({ route }) => {
    return (
        <li className="mr-10">
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;
```

</details> <br>






#### 📌 Responsive Navbar Toggle

<details>
<summary>Toggle Menu with useState and Lucide React</summary>

**State and Toggle Function**

```jsx
const [open, setOpen] = useState(false);

const handleMenuBar = () => {
    setOpen(!open);
};
```

**Navbar JSX**

```jsx
<span className="flex items-center gap-2">
    {/* Part I: Mobile Menu Toggle */}
    <span className="relative md:hidden">
        <button onClick={handleMenuBar} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
        </button>

        <ul
            className={`absolute left-0 z-50 w-48 bg-blue-200 text-black
            duration-300 ${open ? "top-12 opacity-100" : "-top-60 opacity-0 pointer-events-none"}`}
        >
            {links}
        </ul>
    </span>

    {/* Part II: Brand Name */}
    <h3 className="text-2xl font-bold">
        Gym<span className="text-orange-400">Plans</span>
    </h3>
</span>
```

</details>

<br>











#### 📌 Create Pricing Cards with JSON Data

<details>
<summary>Step 01 — Generate Pricing Data</summary>

Generate an array of objects in JSON format containing gym membership plan information.

</details>

<details>
<summary>Step 02 — Store JSON Data</summary>

Create a `pricingData.json` file inside the `public/` folder and paste the generated JSON data.

</details>

<details>
<summary>Step 03 — Fetch Pricing Data in App.jsx</summary>

Use `fetch()` to retrieve `pricingData.json` and convert the response into JSON data.

```jsx
const pricingPromise = fetch('pricingData.json').then(res => res.json())
```

</details>

<details>
<summary>Step 04 — Set Up Suspense Fallback</summary>

Wrap `PricingOptions` with `Suspense` to display a loading spinner while the pricing data is loading. Pass `pricingPromise` as a prop.

```jsx
<Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
    <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
</Suspense>
```

</details>

<details>
<summary>Step 05 — Receive the Promise</summary>

Receive `pricingPromise` through props in the `PricingOptions` component.

```jsx
const PricingOptions = ({ pricingPromise }) => {}
```

</details> <br>









#### 📌 Equal Height for Pricing Card Features

<details>
<summary>Way 01 — Using map() Directly</summary>

To make the features section fill the available space, use `flex-1` on its container.

```jsx
<div className='features flex-1'>
    {
        features.map((feature, index) => <p key={index}>{feature}</p>)
    }
</div>
```

</details>

<details>
<summary>Way 02 — Using a Reusable Component</summary>

Use a separate `PricingFeatures` component to render each feature.

```jsx
<div className='features flex-1'>
    {
        features.map((feature, index) => <PricingFeatures
            key={index}
            feature={feature}></PricingFeatures>)
    }
</div>
```

</details>

**Note:** Use `flex flex-col` on the parent pricing card and `flex-1` on the features container to help align the Subscribe buttons at the same level.
<br>









#### 📌 Display Features with a Check Icon

<details>
<summary>Using Lucide React Check Icon</summary>

Use the `Check` icon from `lucide-react` to display a green checkmark beside each pricing feature.

```jsx
const PricingFeatures = ({ feature }) => {
    return (
        <p className='flex'>
            <Check className='w-[15px] mr-2 text-green-400'></Check> {feature}
        </p>
    );
};
```
</details> <br>







#### 📌 Customize Pricing Card Features and Badge

<details>
<summary>Way 01 — Customize Feature List with Check Icons</summary>

Use a checkmark SVG beside each feature to create a clean, readable pricing list. The `flex-1` class helps the feature list occupy the available space and align buttons across cards.

```jsx id="6z7nbm"
<ul className="flex-1 mt-6 flex flex-col gap-2 text-xs">
    {
        features.map((feature, index) =>
            <li key={index}>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>{feature}</span>
            </li>)
    }
</ul>
```

</details>

<details>
<summary>Way 02 — Show a Most Popular Badge</summary>

Use conditional rendering to display the **Most Popular** badge only when `popular` is `true`.

```jsx id="3cs9sd"
{/* <span className="badge badge-xs badge-warning"></span> */}
{popular && <span className="badge badge-xs badge-warning">Most Popular</span>}
```

</details><br>






#### 📌 Recharts use

<details>
<summary>Create a Line Chart with Recharts</summary>

### 1. Install Recharts
`npm install recharts`

### 2. Import Components
`import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';`

### 3. Create Data
`const data = [{ name: 'Mon', members: 40 }, { name: 'Tue', members: 65 }, { name: 'Wed', members: 50 }, { name: 'Thu', members: 80 }, { name: 'Fri', members: 45 }];`

### 4. Create the Chart

```
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Mon', members: 40 },
    { name: 'Tue', members: 65 },
    { name: 'Wed', members: 50 },
    { name: 'Thu', members: 80 },
    { name: 'Fri', members: 45 }
];

const MyLineChart = () => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line dataKey="members" stroke="#6366f1" />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default MyLineChart;
```


### 5. Key Points
- `data` — Provides the chart data.
- `XAxis` — Displays the days.
- `YAxis` — Displays the member count.
- `Tooltip` — Shows values on hover.
- `Line` — Displays the data as a line.
- `ResponsiveContainer` — Makes the chart responsive.

</details><br>










#### 📌 Axios Docs

**Search Prompt:**

Create a JSON array of 3 gym members with id, English name, age, plan, duration, price, workout (nested object: chest, back, legs), and city.

**Steps:**

1. Create a `gymData.json` file inside the `public` folder.
2. Install Axios:

   ```bash
   npm install axios
   ```

3. Use Axios in `App.jsx` without `.then()`:

```jsx
import axios from 'axios';

// Fetch gym data using Axios without then()
const gymDataPromise = axios.get('gymData.json');

<GymChart gymDataPromise={gymDataPromise} />
```

<br>


##### || GymChart.jsx

```jsx
import React, { use } from 'react';
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const GymChart = ({ gymDataPromise }) => {
    const gymDataRes = use(gymDataPromise);
    // console.log(gymDataRes);  // {data: Array(7), status: 200, statusText: 'OK', headers: AxiosHeaders, config: {…}, …}
    
    const gymData = gymDataRes.data;  // [{...}, {....}] (Nested)



    // data processing for the chart
    const gymChartData = gymData.map(singleData => {
        const student = {
            id: singleData.id,
            name: singleData.name,
            chest: singleData.workout.chest,
            back: singleData.workout.back,
            legs: singleData.workout.legs,
        };

        const avgThree = (student.chest + student.back + student.legs) / 3;
        student.avg = avgThree;

        return student;
    });

    return (
        <section className="my-18 md:my-30">
            <div className="w-[95%] md:w-[70%] mx-auto">
                <h2 className="text-xl md:text-2xl font-bold text-sky-500 text-center mb-10">
                    Gym Members' Average Workout Performance Using Axios
                </h2>

                <div className="w-full min-w-0">
                    <ResponsiveContainer width="100%" height={350}>
                        <BarChart data={gymChartData}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Legend />
                            <Bar dataKey="chest" name="Chest" fill="#6366f1" />
                            <Bar dataKey="back" name="Back" fill="#06b6d4" />
                            <Bar dataKey="legs" name="Legs" fill="#f43f5e" />
                            <Bar dataKey="avg" name="Average Score" fill="#6366f1" />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: "#1e293b",
                                    border: "1px solid #334155",
                                    borderRadius: "8px",
                                    color: "#ffffff"
                                }}
                                itemStyle={{ color: "#ffffff" }}
                                labelStyle={{ color: "#ffffff" }}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </section>
    );
};

export default GymChart;
```

#### || Awesome `React` `Components`

<br>










## 👨‍💻 Author

**Bayjid Alom**

> Progress is built through consistency, one line of code at a time.


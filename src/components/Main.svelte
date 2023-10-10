<script>
    import Step from "./Step.svelte"
    let steps =[
        {
            name: "Social Media Web Application with FastAPI",
            icon: "fa-brands fa-python",
            description:
            "A responsive social media platform using FastAPI, integrating SQLAlchemy and Postgres for data storage and securing user authentication with JWT tokens and password hashing.",
            href: "https://github.com/PDurgi/SocialMediaApp-Fastapi",
        },
        {
            name: "Simulation of Shopify – An E-commerce web application to buy and sell goods",
            icon: "fa-brands fa-shopify",
            description:
                "A scalable e-commerce platform with React.js, Node.js, and MongoDB, offering user authentication, product management, and hosted on AWS EC2.",
        },
        {
            name: "Multi-Threaded TCP-IP Chat Application",
            icon: "fa-regular fa-message",
            description:
                " A multi-threaded chat application using C++ with TCP-IP protocol, focusing on signal handling and network multiplexing for maintainability.",
            href :"https://github.com/PDurgi/Client-Server",
            },
    ]
    let benefits = [{
            metric: "10x",
            name: "A Full-Stack developer",
            description:
                "I taught myself to code using free online resources and absolutely fell in love with the creativity and problem solving that is involved in developing and engineering innovative new online experiences. Starting of with JavaScript, HTML & CSS and evolving my knowledge base to include JavaScript frameworks, backend programming, design, cloud services and much much more.",
        },
        {
            name: "a product design & UX finatic",
            description:
                "Carefully crafting and designing amazing user experiences allows me to express and experiment with every morsel of creativity I have. I love the challenge of learning new design concepts and enabling users with amazing online experiences.",
        },
        {
            name: "An excellent communicator and collaborator",
            description:
                "Communication is key and it's a paramount value of mine. I believe in transparency and constructive communication above all else. This helps me develop deep relationships and ensures my effectiveness and productivity in any work space with any team.",
        },

    ]
</script>

<main class="flex flex-col flex-1 p-4">
    <section id="intropage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14">
        <div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
                Hi! I'm <span class="poppins text-violet-400">Pooja Durgi</span>
                <br />Full Stack
                <span class="poppins text-violet-400">Developer</span>

            </h2>
            <p class="text-base sm:text-lg md:text-xl">
                My <span class="text-violet-400"> favorite tech</span> includes Python,JavaScript,
                SvelteKit, TailwindCSS, Node.js + Express.js & PostgreSQL!

            </p>
            <a class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 
                cursor-pointer" href="https://www.linkedin.com/in/poojadurgi/"
                target="_blank">
                <div
                    class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
                />
                <h4 class="relative z-9">Get in touch &rarr; </h4>
            </a>
        </div>
            <div class="relative shadow-2xl grid place-items-center">
                <img
                    src={"images/pd.jpg"}
                    alt="Profile image"
                    class="object-cover z-[2] max-h-[70vh]"
                /></div>
    </section>
<section class="py-20 lg:py-32 flex flex-col gap-24" id="projects">
    <div class="flex flex-col gap-2 text-center">
        <h6 class="text-large sm:text-xl md:text-2xl">
        </h6>
        <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
            Curious to <span class="poppins text-violet-400">see</span> my work?
        </h3>

    </div>
    <a
    href="https://github.com/PDurgi"
    target="_blank"
    class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-violet-700 duration-200"
>
<i class="fa-brands fa-github"></i>
    <p> My Github projects</p>
</a>
<div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
    <Step step={steps[0]}>
        <p>
            A responsive social media platform using   <strong
                class="text-violet-400"
                >FastAPI, integrating SQLAlchemy and Postgres!</strong
            > for data storage and securing user authentication with JWT tokens and password hashing.
        </p>
    </Step>
    <Step step={steps[1]}>
        <p>
            A scalable Full-Stack e-commerce platform built with <strong
                class="text-violet-400">React.js</strong
                > for the frontend <strong
                class="text-violet-400">Node.js and MongoDB</strong
                > for the backend. This is hosted on   
            <strong class="text-violet-400">AWS EC2.</strong
            >
            Also offers features like user authentication & product management.
        </p>
    </Step>
    <Step step={steps[2]}>
        <p>
            A multi-threaded chat application using <strong class="text-violet-400"
            >C++ with TCP-IP protocol,</strong> focusing on signal handling and network multiplexing for maintainability.   
        </p>
    </Step>
</div>
</section >
<section id="about" class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative">
    <div
            class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"
        >
            <h6 class="text-large sm:text-xl md:text-2xl">
                Want to know more?
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                A bit <span class="poppins text-violet-400">about</span> me.
            </h3>
        </div>
        <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
            I am . . .
        </p>
        <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
            {#each benefits as benefit, index}
            <div class="flex gap-6 sm:gap-8">
                <p
                        class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold"
                    >
                        0{index + 1}
                    </p>
                    <div class="flex flex-col gap-6 sm:gap-8">
                        <h3 class="text-2xl sm:text-3xl md:text-5xl">
                            {benefit.name}
                        </h3>
                        <p>{benefit.description}</p>
                    </div>
            </div>
            {/each}

        </div>
        <div
            class="flex flex-col overflow-x-scroll gap-10 max-w-[800px] mx-auto w-full"
            >
                <table class="bg-white text-slate-700 rounded text-center">
                    <thead class={"border-b border-solid border-slate-200  "}>
                        <tr class="">
                            <th /><th
                            class="bg-violet-700 text-white whitespace-nowrap p-4 px-8"
                            >The <span class="text-violet-400">Complete</span> Package</th
                        >
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b border-solid border-slate-200">
                        <td
                            class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm"
                            >Dedication</td>
                            <td><i class="fa-solid fa-check text-green-500" /></td>
                    </tr>
                    <tr class="border-b border-solid border-slate-200">
                        <td
                            class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm"
                            >Critical Thought</td>
                            <td><i class="fa-solid fa-check text-green-500" /></td>
                    </tr>
                    <tr class="border-b border-solid border-slate-200">
                        <td
                            class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm"
                            >Interpersonal Skills</td
                            >
                            <td><i class="fa-solid fa-check text-green-500" /></td>
                    </tr>
                    <tr class="border-b border-solid border-slate-200">
                        <td
                            class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm"
                            >Progamming Ability</td
                            >
                            <td><i class="fa-solid fa-check text-green-500" /></td>
                    </tr>
                </tbody>
            </table>
            </div>
            <div class="mx-auto -mt-12 italic sm:hidden opacity-50">
                <p>Scroll to see more &rarr;</p>
            </div>
</section>
</main>
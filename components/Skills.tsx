import Image from "next/image"
type Props = {}
import { motion } from "framer-motion"

export default function Skills({ }: Props) {
    return (
        <motion.div className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl text-gray-500">
                Skills
            </h3>
            <div className="grid gap-5 grid-cols-4">
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg"
                    alt="vscode"
                    width={100}
                    height={100}
                    className="rounded-lg"
                />
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Github-desktop-logo-symbol.svg"
                    alt="github"
                    width={100}
                    height={100}
                    className="rounded-lg"
                />
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
                    alt="typescript"
                    width={100}
                    height={100}
                    className="rounded-lg"
                />
                 <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
                    alt="javascript"
                    width={100}
                    height={100}
                    className="rounded-lg"
                />
                 <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
                    alt="nodejs"
                    width={100}
                    height={100}
                    className="rounded-lg"
                />
                 <Image
                    src="https://www.servernoobs.com/wp-content/uploads/2016/01/mongodb-logo-1.png"
                    alt="mongodb"
                    width={100}
                    height={100}
                    className="rounded-lg"
                />
                 <Image
                    src="https://i0.wp.com/saixiii.com/wp-content/uploads/2017/04/mysql.png?ssl=1"
                    alt="mysql"
                    width={100}
                    height={100}
                    className="rounded-lg"
                />
                 <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/5/5c/AWS_Simple_Icons_AWS_Cloud.svg"
                    alt="aws"
                    width={100}
                    height={100}
                    className="rounded-lg"
                />
                 <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                    alt="reactjs"
                    width={100}
                    height={100}
                    className="rounded-lg"
                />
                 <Image
                    src="https://i.ytimg.com/an/cxm6FNyKzwA/3903739474801779860_mq.jpg?v=62a9dfef"
                    alt="nextjs"
                    width={100}
                    height={100}
                    className="rounded-lg"
                />
                 <Image
                    src="https://user-images.githubusercontent.com/7853266/44114706-9c72dd08-9fd1-11e8-8d9d-6d9d651c75ad.png"
                    alt="postman"
                    width={100}
                    height={100}
                    className="rounded-lg"
                />
                 <Image
                    src="https://i0.wp.com/blog.knoldus.com/wp-content/uploads/2019/12/mocha.png?w=192&ssl=1"
                    alt="mocha"
                    width={100}
                    height={100}
                    className="rounded-lg"
                />
            </div>

        </motion.div>
    )
}
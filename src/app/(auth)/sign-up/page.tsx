// import SignUpForm from "@/components/forms/sign-up"
// import { GoogleAuthButton } from "@/components/global/google-oauth-button"
// import { Separator } from "@/components/ui/separator"

// type Props = {}

// const SignUpPage = (props: Props) => {
//     return (
//         <>
//             <h5 className="font-bold text-base text-themeTextWhite">Signup</h5>
//             <p className="text-themeTextGray leading-tight">
//                 Network with people from around the world, join groups, create
//                 your own, watch courses and become the best version of yourself.
//             </p>
//             <SignUpForm />
//             <div className="my-10 w-full relative">
//                 <div className="bg-black p-3 absolute text-themeTextGray text-xs top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//                     OR CONTINUE WITH
//                 </div>
//                 <Separator orientation="horizontal" className="bg-themeGray" />
//             </div>
//             <GoogleAuthButton method="signup" />
//         </>
//     )
// }

// export default SignUpPage
import SignUpForm from "@/components/forms/sign-up"
import { GoogleAuthButton } from "@/components/global/google-oauth-button"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

const SignUpPage = () => {
    return (
        <div className="max-w-md mx-auto p-6 bg-themeCardBg rounded-lg shadow-lg">
            <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-themeTextWhite mb-2">
                    Create Your Account
                </h1>
                <p className="text-themeTextGray">
                    Join our community to connect with people worldwide, create
                    groups, and access courses to grow personally and
                    professionally.
                </p>
            </div>

            <SignUpForm />

            <div className="my-6 relative">
                <Separator className="bg-themeGray" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-3 bg-themeCardBg text-themeTextGray text-sm">
                    OR SIGN UP WITH
                </div>
            </div>

            <div className="space-y-4">
                <GoogleAuthButton method="signup" />

                <div className="text-center mt-6">
                    <p className="text-themeTextGray text-sm">
                        Already have an account?{" "}
                        <Link href="/sign-in" passHref>
                            <Button
                                variant="link"
                                className="text-themeAccent hover:text-themeAccentHover p-0 h-auto"
                            >
                                Sign in here
                            </Button>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage

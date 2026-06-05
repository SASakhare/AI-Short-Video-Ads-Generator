import React, { useState } from "react"
import Title from "../components/Title"
import UploadZone from "../components/UploadZone"
import { Loader2, RectangleHorizontalIcon, RectangleVertical, RectangleVerticalIcon, Sparkle } from "lucide-react";

const Generator = () => {

    const [name, setName] = useState<string>("");
    const [productName, setProductName] = useState<string>("");
    const [productDescription, setProductDescription] = useState<string>("");
    const [aspectRatio, setAspectRatio] = useState<string>("9:16");
    const [productImage, setProductImage] = useState<File | null>(null);
    const [modelImage, setModelImage] = useState<File | null>(null);
    const [userPrompt, setUserPrompt] = useState<string>("");
    const [isGenerating, setIsGenerating] = useState<boolean>(false);
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: "product" | "model") => {

        if (e.target.files && e.target.files[0]) {
            if (type == "product") {
                setProductImage(e.target.files[0])
            } else {
                setModelImage(e.target.files[0])
            }
        }
    }

    const handleGenerate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    }
    return (
        <div className="min-h-screen text-white p-6 md:p-12 mt-28">

            <form onSubmit={handleGenerate} className="max-w-4xl mx-auto mb-40" >

                <Title
                    heading="Create In-Context Image"
                    description="Upload your model and product images to generate stunning UGC,
                    short-form videos and social media posts
                    "
                />

                <div className="flex gap-20 max-sm:flex-col items-start justify-between ">
                    {/* left col */}
                    <div className="flex flex-col w-full sm:max-w-60 gap-8 mt-8 mb-12">
                        <UploadZone label="Product Image" file={productImage} onClear={() => setProductImage(null)} onChange={(e) => handleFileChange(e, 'product')} />
                        <UploadZone label="Model Image" file={modelImage} onClear={() => setModelImage(null)} onChange={(e) => handleFileChange(e, 'model')} />
                    </div>

                    {/* right col */}
                    <div className="w-full">
                        <div className="mb-4 text-gray-300">
                            <label htmlFor="name" className="block text-sm mb-4">Project Name</label>
                            <input type="text" id="name" placeholder="Name your project" required value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full bg-white/3 rounded-lg border-2 p-4 text-sm border-violet-200/10 focus:border-violet-500/50 outline-none transition-all"
                            />
                        </div>
                        <div className="mb-4 text-gray-300">
                            <label htmlFor="productName" className="block text-sm mb-4">Product Name</label>
                            <input type="text" id="productName" placeholder="Name your product" required value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                                className="w-full bg-white/3 rounded-lg border-2 p-4 text-sm border-violet-200/10 focus:border-violet-500/50 outline-none transition-all"
                            />
                        </div>
                        <div className="mb-4 text-gray-300">
                            <label htmlFor="productDescription" className="block text-sm mb-4">Product Description </label>
                            <textarea id="productDescription" placeholder="Enter the product description" rows={4} required value={productDescription}
                                onChange={(e) => setProductDescription(e.target.value)}
                                className="w-full bg-white/3 rounded-lg border-2 p-4 text-sm border-violet-200/10 focus:border-violet-500/50 outline-none transition-all"
                            />
                        </div>

                        <div className="mb-4 text-gray-300">
                            <label className="block text-sm mb-4">Aspect Ratio</label>
                            <div className="flex gap-3">
                                <RectangleVerticalIcon onClick={() => setAspectRatio("9:16")}
                                    className={`p-2.5 size-13 bg-white/6 rounded transition-all ring-2 ring-transparent cursor-pointer
                                    ${aspectRatio === '9:16' ? "ring-violet-500/50 bg-white/10" : ""}`}
                                />
                                <RectangleHorizontalIcon onClick={() => setAspectRatio("16:9")}
                                    className={`p-2.5 size-13 bg-white/6 rounded transition-all ring-2 ring-transparent cursor-pointer
                                    ${aspectRatio === '16:9' ? "ring-violet-500/50 bg-white/10" : ""}`}
                                />
                            </div>
                        </div>

                        <div className="mb-4 text-gray-300">
                            <label htmlFor="userPrompt" className="block text-sm mb-4">User Prompt</label>
                            <textarea id="userPrompt" placeholder="Enter the prompt to generate video ads" rows={4} required value={userPrompt}
                                onChange={(e) => setUserPrompt(e.target.value)}
                                className="w-full bg-white/3 rounded-lg border-2 p-4 text-sm border-violet-200/10 focus:border-violet-500/50 outline-none transition-all"
                            />
                        </div>
                        <div className="mb-4 text-gray-300">
                            {
                                isGenerating ? (
                                    <>
                                        <button disabled className="w-full flex items-center justify-center gap-4  h-12 text-lg rounded-2xl bg-violet-500/60 cursor-default">
                                            <Loader2 className="animate-spin" />
                                            <span className="text-white/50">Video Ads is Generating</span>
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button type="submit" className="w-full flex items-center justify-center gap-4 text-center h-12 text-lg rounded-2xl bg-violet-500  hover:bg-violet-600 transition-colors duration-300">
                                            <Sparkle />
                                            <span>
                                                Generate Video Ads
                                            </span>
                                        </button>
                                    </>
                                )
                            }
                        </div>

                    </div>
                </div>

            </form>
        </div>
    )
}

export default Generator
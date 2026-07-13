import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import {
  PackagePlus,
  Image as ImageIcon,
  DollarSign,
  Tag,
  FileText,
  UploadCloud,
  Loader2,
  CheckCircle2,
  Layers,
  Sparkles,
  UserCheck,
} from "lucide-react";
import { addPerfumes } from "../../../lib/actions/perfume";

// ImgBB Upload Response Type
interface ImgBBResponse {
  data: {
    url: string;
    display_url: string;
  };
  success: boolean;
  status: number;
}

// Form Interface
interface PerfumeFormData {
  title: string;
  category: string;
  gender: "Men" | "Women" | "Unisex"; // Men / Women Target
  scentNotes: string;
  price: number;
  shortDescription: string;
  fullDescription: string;
  imageUrl?: string;
}

const AddPerfume = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imageUploading, setImageUploading] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string>("");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<PerfumeFormData>({
    defaultValues: {
      gender: "Men",
    },
  });

  const selectedGender = watch("gender");

  // Image Upload Handler using ImgBB API
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const localPreview = URL.createObjectURL(file);
    setPreviewImage(localPreview);

    const apiKey = import.meta.env.VITE_IMGBB_API_KEY;
    if (!apiKey) {
      toast.error("ImgBB API Key is missing!");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      setImageUploading(true);
      const res = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
        method: "POST",
        body: formData,
      });

      const data: ImgBBResponse = await res.json();

      if (data.success) {
        setUploadedImageUrl(data.data.display_url);
        setValue("imageUrl", data.data.display_url);
        toast.success("Image uploaded successfully!");
      } else {
        toast.error("Failed to upload image.");
      }
    } catch (error) {
      console.error("ImgBB Upload Error:", error);
      toast.error("Error uploading image.");
    } finally {
      setImageUploading(false);
    }
  };

  // Submit Perfume Form to Backend API
  const onSubmit = async (data: PerfumeFormData) => {
    if (!uploadedImageUrl && !data.imageUrl) {
      toast.error("Please upload an image!");
      return;
    }

    const finalData = {
      ...data,
      imageUrl: uploadedImageUrl || data.imageUrl,
      price: Number(data.price),
    };

    try {
      setIsSubmitting(true);

      const response = await addPerfumes(finalData);

      // MongoDB Acknowledged Response Check
      if (response && response.acknowledged) {
        toast.success("Perfume added successfully!");
        navigate("/dashboard/add-perfumes");
      } else {
        throw new Error("Failed to save product in database.");
      }
    } catch (error: any) {
      console.error(error);
      toast.error(error.message || "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-perf-bg w-full flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full mt-12 lg:mt-0 max-w-7xl bg-perf-card border border-perf-border/80  p-6 sm:p-10 shadow-xl">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="uppercase tracking-[0.3em] text-perf-gold text-xs font-semibold">
            RossWell Boutique
          </span>
          <h1 className="mt-1 text-2xl sm:text-3xl font-bold font-serif-luxury text-perf-text-main">
            Add New Fragrance Item
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-perf-text-muted">
            Enter item details to publish in the store collection
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Row 1: Title & Gender Selection (Men / Women) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Title */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-perf-text-main flex items-center gap-1.5">
                <Tag size={14} className="text-perf-gold" /> Perfume Title
              </label>
              <input
                {...register("title", { required: "Title is required" })}
                type="text"
                placeholder="e.g., Royal Oud Supreme"
                className="w-full bg-perf-input-bg border border-perf-border rounded-xl px-4 py-3 text-sm text-perf-text-main outline-none focus:border-perf-gold transition"
              />
              {errors.title && (
                <span className="text-xs text-red-500">
                  {errors.title.message}
                </span>
              )}
            </div>

            {/* Target Audience: Men / Women Option Buttons */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-perf-text-main flex items-center gap-1.5">
                <UserCheck size={14} className="text-perf-gold" /> Target Gender
              </label>

              <div className="grid grid-cols-3 gap-3 pt-0.5">
                {/* Men Option */}
                <label
                  className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border cursor-pointer transition-all text-xs font-bold uppercase tracking-wider ${
                    selectedGender === "Men"
                      ? "bg-perf-gold/20 border-perf-gold text-perf-gold shadow-sm"
                      : "bg-perf-input-bg border-perf-border text-perf-text-muted hover:border-perf-gold/50"
                  }`}
                >
                  <input
                    type="radio"
                    value="Men"
                    {...register("gender", { required: true })}
                    className="hidden"
                  />
                  <span>Men</span>
                </label>

                {/* Women Option */}
                <label
                  className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border cursor-pointer transition-all text-xs font-bold uppercase tracking-wider ${
                    selectedGender === "Women"
                      ? "bg-perf-gold/20 border-perf-gold text-perf-gold shadow-sm"
                      : "bg-perf-input-bg border-perf-border text-perf-text-muted hover:border-perf-gold/50"
                  }`}
                >
                  <input
                    type="radio"
                    value="Women"
                    {...register("gender", { required: true })}
                    className="hidden"
                  />
                  <span>Women</span>
                </label>

                {/* Unisex Option */}
                <label
                  className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border cursor-pointer transition-all text-xs font-bold uppercase tracking-wider ${
                    selectedGender === "Unisex"
                      ? "bg-perf-gold/20 border-perf-gold text-perf-gold shadow-sm"
                      : "bg-perf-input-bg border-perf-border text-perf-text-muted hover:border-perf-gold/50"
                  }`}
                >
                  <input
                    type="radio"
                    value="Unisex"
                    {...register("gender", { required: true })}
                    className="hidden"
                  />
                  <span>Unisex</span>
                </label>
              </div>
            </div>
          </div>

          {/* Row 2: Concentration Category & Price */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Perfume Category */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-perf-text-main flex items-center gap-1.5">
                <Layers size={14} className="text-perf-gold" /> Concentration
                Category
              </label>
              <select
                {...register("category", { required: "Category is required" })}
                className="w-full bg-perf-input-bg border border-perf-border rounded-xl px-4 py-3 text-sm text-perf-text-main outline-none focus:border-perf-gold transition cursor-pointer"
              >
                <option value="">Select Concentration</option>
                <option value="Eau de Parfum">Eau de Parfum (EDP)</option>
                <option value="Extrait de Parfum">Extrait de Parfum</option>
                <option value="Eau de Toilette">Eau de Toilette (EDT)</option>
                <option value="Pure Attar">Pure Attar Oil</option>
              </select>
              {errors.category && (
                <span className="text-xs text-red-500">
                  {errors.category.message}
                </span>
              )}
            </div>

            {/* Price */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-perf-text-main flex items-center gap-1.5">
                <DollarSign size={14} className="text-perf-gold" /> Price ($
                USD)
              </label>
              <input
                {...register("price", {
                  required: "Price is required",
                  min: { value: 1, message: "Price must be greater than 0" },
                })}
                type="number"
                step="0.01"
                placeholder="249.99"
                className="w-full bg-perf-input-bg border border-perf-border rounded-xl px-4 py-3 text-sm text-perf-text-main outline-none focus:border-perf-gold transition"
              />
              {errors.price && (
                <span className="text-xs text-red-500">
                  {errors.price.message}
                </span>
              )}
            </div>
          </div>

          {/* Row 3: Scent Notes & Short Description */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Fragrance Family / Scent Notes */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-perf-text-main flex items-center gap-1.5">
                <Sparkles size={14} className="text-perf-gold" /> Scent Profile
                / Family
              </label>
              <input
                {...register("scentNotes")}
                type="text"
                placeholder="e.g., Oriental Woody, Amber, Saffron"
                className="w-full bg-perf-input-bg border border-perf-border rounded-xl px-4 py-3 text-sm text-perf-text-main outline-none focus:border-perf-gold transition"
              />
            </div>

            {/* Short Description */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-perf-text-main flex items-center gap-1.5">
                <FileText size={14} className="text-perf-gold" /> Short Summary
              </label>
              <input
                {...register("shortDescription", {
                  required: "Short description is required",
                })}
                type="text"
                placeholder="Brief 1-line fragrance summary..."
                className="w-full bg-perf-input-bg border border-perf-border rounded-xl px-4 py-3 text-sm text-perf-text-main outline-none focus:border-perf-gold transition"
              />
              {errors.shortDescription && (
                <span className="text-xs text-red-500">
                  {errors.shortDescription.message}
                </span>
              )}
            </div>
          </div>

          {/* Row 4: Full Description */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-perf-text-main">
              Full Scent Overview
            </label>
            <textarea
              {...register("fullDescription", {
                required: "Full description is required",
              })}
              rows={4}
              placeholder="Elaborate scent story, longevity, and detailed notes..."
              className="w-full bg-perf-input-bg border border-perf-border rounded-xl px-4 py-3 text-sm text-perf-text-main outline-none focus:border-perf-gold transition resize-none"
            ></textarea>
            {errors.fullDescription && (
              <span className="text-xs text-red-500">
                {errors.fullDescription.message}
              </span>
            )}
          </div>

          {/* Row 5: Image Upload (ImgBB Integration) */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-perf-text-main flex items-center gap-1.5">
              <ImageIcon size={14} className="text-perf-gold" /> Product Image
              Upload
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
              <label className="sm:col-span-2 flex flex-col items-center justify-center border-2 border-dashed border-perf-border hover:border-perf-gold rounded-xl p-5 bg-perf-input-bg cursor-pointer transition text-center group">
                {imageUploading ? (
                  <div className="flex flex-col items-center py-1">
                    <Loader2
                      size={24}
                      className="animate-spin text-perf-gold mb-1"
                    />
                    <span className="text-xs text-perf-text-muted">
                      Uploading to ImgBB...
                    </span>
                  </div>
                ) : uploadedImageUrl ? (
                  <div className="flex items-center gap-2 text-green-600 font-semibold text-xs py-1">
                    <CheckCircle2 size={18} />
                    <span>Uploaded Successfully</span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <UploadCloud size={24} className="text-perf-gold mb-1" />
                    <span className="text-xs font-semibold text-perf-text-main">
                      Upload perfume photo
                    </span>
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>

              <div className="h-28 border border-perf-border rounded-xl bg-perf-input-bg flex items-center justify-center overflow-hidden">
                {previewImage || uploadedImageUrl ? (
                  <img
                    src={previewImage || uploadedImageUrl}
                    alt="Preview"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="text-xs text-perf-text-muted">No Image</span>
                )}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting || imageUploading}
              className="w-full flex items-center justify-center gap-2 bg-perf-gold hover:opacity-90 text-white font-semibold py-3.5 px-6 rounded-xl transition duration-300 shadow-md disabled:opacity-60 cursor-pointer text-sm"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  <span>Publishing...</span>
                </>
              ) : (
                <>
                  <PackagePlus size={18} />
                  <span>Publish Perfume To Store</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddPerfume;

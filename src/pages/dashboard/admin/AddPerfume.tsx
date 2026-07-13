import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import {
  PackagePlus,
  Image as ImageIcon,
  DollarSign,
  Tag,
  Sparkles,
  Droplets,
  Layers,
  FileText,
  UploadCloud,
  Loader2,
  CheckCircle2,
} from "lucide-react";

// ImgBB Upload Response Type
interface ImgBBResponse {
  data: {
    url: string;
    display_url: string;
  };
  success: boolean;
  status: number;
}

// Form Data Interface based on Assignment Requirements
interface PerfumeFormData {
  title: string;
  brand: string;
  category: string;
  price: number;
  volumeMl: number;
  fragranceFamily: string;
  topNotes: string;
  shortDescription: string;
  fullDescription: string;
  imageUrl?: string;
  isFeatured?: boolean;
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
    formState: { errors },
  } = useForm<PerfumeFormData>();

  // Image Upload Handler using ImgBB API
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Image preview
    const localPreview = URL.createObjectURL(file);
    setPreviewImage(localPreview);

    const apiKey = import.meta.env.VITE_IMGBB_API_KEY;
    if (!apiKey) {
      toast.error("ImgBB API Key is missing in environment variables!");
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
        toast.success("Image uploaded successfully to ImgBB!");
      } else {
        toast.error("Failed to upload image. Please try again.");
      }
    } catch (error) {
      console.error("ImgBB Upload Error:", error);
      toast.error("Error uploading image to ImgBB server.");
    } finally {
      setImageUploading(false);
    }
  };

  // Submit Perfume Form to Backend API
  const onSubmit = async (data: PerfumeFormData) => {
    if (!uploadedImageUrl && !data.imageUrl) {
      toast.error("Please upload or provide a valid perfume image!");
      return;
    }

    const finalData = {
      ...data,
      imageUrl: uploadedImageUrl || data.imageUrl,
      price: Number(data.price),
      volumeMl: Number(data.volumeMl),
      createdAt: new Date().toISOString(),
    };

    try {
      setIsSubmitting(true);

      // Replace this URL with your Express / Backend API endpoint
     

      if (!response.ok) {
        throw new Error("Failed to add new perfume product");
      }

      toast.success("Perfume added to RossWell collection successfully!");
      navigate("/add-perfume"); // Redirects to Manage Items page as per Assignment requirement
    } catch (error: any) {
      console.error(error);
      toast.error(
        error.message || "Something went wrong while adding product.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-perf-bg max-w-11/12 mx-auto flex justify-center items-center">
      <div className="w-full mx-auto max-w-4xl bg-perf-card border border-perf-border/80 rounded-3xl p-6 sm:p-10 shadow-xl">
      
        {/* Page Header */}
        <div className="text-center mb-10">
          <span className="uppercase tracking-[0.35em] text-perf-gold text-xs sm:text-sm font-semibold">
            RossWell Exclusive Admin
          </span>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold font-serif-luxury text-perf-text-main">
            Add New Fragrance Product
          </h1>
          <p className="mt-2 text-sm text-perf-text-muted max-w-lg mx-auto">
            Fill in the details below to add a luxury fragrance item to your
            inventory listing.
          </p>
        </div>

        {/* Product Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Section 1: Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Perfume Name */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-perf-text-main flex items-center gap-1.5">
                <Tag size={14} className="text-perf-gold" /> Perfume Title /
                Name
              </label>
              <input
                {...register("title", {
                  required: "Perfume title is required",
                })}
                type="text"
                placeholder="e.g., Imperial Amber Oud"
                className="w-full bg-perf-input-bg border border-perf-border rounded-xl px-4 py-3 text-sm text-perf-text-main outline-none focus:border-perf-gold transition"
              />
              {errors.title && (
                <span className="text-xs text-red-500">
                  {errors.title.message}
                </span>
              )}
            </div>

            {/* Brand */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-perf-text-main flex items-center gap-1.5">
                <Sparkles size={14} className="text-perf-gold" /> Brand /
                Collection
              </label>
              <input
                {...register("brand", { required: "Brand name is required" })}
                type="text"
                placeholder="e.g., RossWell Elixir"
                className="w-full bg-perf-input-bg border border-perf-border rounded-xl px-4 py-3 text-sm text-perf-text-main outline-none focus:border-perf-gold transition"
              />
              {errors.brand && (
                <span className="text-xs text-red-500">
                  {errors.brand.message}
                </span>
              )}
            </div>
          </div>

          {/* Section 2: Pricing, Category & Size */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Price */}
            <div className="space-y-2">
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

            {/* Volume (ml) */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-perf-text-main flex items-center gap-1.5">
                <Droplets size={14} className="text-perf-gold" /> Volume (ml)
              </label>
              <input
                {...register("volumeMl", {
                  required: "Volume size is required",
                })}
                type="number"
                placeholder="100"
                className="w-full bg-perf-input-bg border border-perf-border rounded-xl px-4 py-3 text-sm text-perf-text-main outline-none focus:border-perf-gold transition"
              />
              {errors.volumeMl && (
                <span className="text-xs text-red-500">
                  {errors.volumeMl.message}
                </span>
              )}
            </div>

            {/* Category */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-perf-text-main flex items-center gap-1.5">
                <Layers size={14} className="text-perf-gold" /> Category
              </label>
              <select
                {...register("category", { required: "Category is required" })}
                className="w-full bg-perf-input-bg border border-perf-border rounded-xl px-4 py-3 text-sm text-perf-text-main outline-none focus:border-perf-gold transition cursor-pointer"
              >
                <option value="">Select Category</option>
                <option value="Eau de Parfum">Eau de Parfum (EDP)</option>
                <option value="Extrait de Parfum">Extrait de Parfum</option>
                <option value="Eau de Toilette">Eau de Toilette (EDT)</option>
                <option value="Attar Oil">Pure Attar Oil</option>
              </select>
              {errors.category && (
                <span className="text-xs text-red-500">
                  {errors.category.message}
                </span>
              )}
            </div>
          </div>

          {/* Section 3: Fragrance Notes & Family */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Fragrance Family */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-perf-text-main">
                Fragrance Family
              </label>
              <input
                {...register("fragranceFamily")}
                type="text"
                placeholder="e.g., Oriental Woody / Floral Amber"
                className="w-full bg-perf-input-bg border border-perf-border rounded-xl px-4 py-3 text-sm text-perf-text-main outline-none focus:border-perf-gold transition"
              />
            </div>

            {/* Top Notes */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-perf-text-main">
                Key Notes
              </label>
              <input
                {...register("topNotes")}
                type="text"
                placeholder="e.g., Bergamot, Oud Wood, Saffron, Vanilla"
                className="w-full bg-perf-input-bg border border-perf-border rounded-xl px-4 py-3 text-sm text-perf-text-main outline-none focus:border-perf-gold transition"
              />
            </div>
          </div>

          {/* Section 4: Image Upload (ImgBB Integration) */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-perf-text-main flex items-center gap-1.5">
              <ImageIcon size={14} className="text-perf-gold" /> Product Image
              (ImgBB Upload)
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
              {/* File Dropzone */}
              <label className="sm:col-span-2 flex flex-col items-center justify-center border-2 border-dashed border-perf-border hover:border-perf-gold rounded-2xl p-5 bg-perf-input-bg cursor-pointer transition text-center group">
                {imageUploading ? (
                  <div className="flex flex-col items-center py-2">
                    <Loader2
                      size={32}
                      className="animate-spin text-perf-gold mb-2"
                    />
                    <span className="text-xs text-perf-text-muted">
                      Uploading to ImgBB...
                    </span>
                  </div>
                ) : uploadedImageUrl ? (
                  <div className="flex items-center gap-2 text-green-600 font-semibold text-xs py-2">
                    <CheckCircle2 size={20} />
                    <span>Image Uploaded Successfully!</span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <UploadCloud
                      size={32}
                      className="text-perf-gold group-hover:scale-110 transition-transform mb-2"
                    />
                    <span className="text-xs font-semibold text-perf-text-main">
                      Click to upload perfume photo
                    </span>
                    <span className="text-[11px] text-perf-text-muted mt-0.5">
                      JPG, PNG, WEBP up to 5MB
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

              {/* Image Preview Box */}
              <div className="h-32 border border-perf-border rounded-2xl bg-perf-input-bg flex items-center justify-center overflow-hidden">
                {previewImage || uploadedImageUrl ? (
                  <img
                    src={previewImage || uploadedImageUrl}
                    alt="Perfume Preview"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="text-xs text-perf-text-muted">
                    No Image Selected
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Section 5: Descriptions */}
          {/* Short Description */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-perf-text-main flex items-center gap-1.5">
              <FileText size={14} className="text-perf-gold" /> Short Summary
            </label>
            <input
              {...register("shortDescription", {
                required: "Short summary is required",
              })}
              type="text"
              placeholder="Brief 1-line fragrance highlight for product card..."
              className="w-full bg-perf-input-bg border border-perf-border rounded-xl px-4 py-3 text-sm text-perf-text-main outline-none focus:border-perf-gold transition"
            />
            {errors.shortDescription && (
              <span className="text-xs text-red-500">
                {errors.shortDescription.message}
              </span>
            )}
          </div>

          {/* Full Description */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-perf-text-main">
              Detailed Overview & Scent Story
            </label>
            <textarea
              {...register("fullDescription", {
                required: "Full description is required",
              })}
              rows={4}
              placeholder="Elaborate scent profile, longevity, occasion, and crafted notes..."
              className="w-full bg-perf-input-bg border border-perf-border rounded-xl px-4 py-3 text-sm text-perf-text-main outline-none focus:border-perf-gold transition resize-none"
            ></textarea>
            {errors.fullDescription && (
              <span className="text-xs text-red-500">
                {errors.fullDescription.message}
              </span>
            )}
          </div>

          {/* Featured Checkbox */}
          <div className="flex items-center gap-2 pt-2">
            <input
              {...register("isFeatured")}
              type="checkbox"
              id="isFeatured"
              className="h-4 w-4 rounded border-perf-border text-perf-gold focus:ring-perf-gold accent-perf-gold cursor-pointer"
            />
            <label
              htmlFor="isFeatured"
              className="text-xs font-semibold uppercase text-perf-text-main cursor-pointer"
            >
              Mark as Featured Collection on Landing Page
            </label>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting || imageUploading}
              className="w-full flex items-center justify-center gap-2 bg-perf-gold hover:opacity-90 text-white font-semibold py-4 px-6 rounded-xl transition duration-300 shadow-md disabled:opacity-60 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  <span>Adding Perfume...</span>
                </>
              ) : (
                <>
                  <PackagePlus size={18} />
                  <span>Publish Fragrance To Store</span>
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

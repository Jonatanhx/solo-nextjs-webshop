import AddProductForm from "./components/AddProductForm";

export default function AdminPage() {
  return (
    <main>
      <div className="bg-gradient-to-r p-4 from-orange-600 to-orange-500 mb-12 flex justify-center">
        <p className="text-white text-2xl font-bold">Admin</p>
      </div>
      <AddProductForm />
    </main>
  );
}

import { UserProps } from "@/interfaces";

export default function UserCard({ name, email, address }: UserProps) {
  return (
    <div className="bg-white shadow-sm border rounded-lg p-4">
      <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
      <p className="text-gray-700 mt-1">{email}</p>

      <div className="mt-3 text-sm text-gray-600">
        <p>
          <span className="font-medium">Street:</span> {address.street}
        </p>
        <p>
          <span className="font-medium">City:</span> {address.city}
        </p>
      </div>
    </div>
  );
}

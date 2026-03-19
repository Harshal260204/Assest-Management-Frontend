export type AssetStatus = "Available" | "Assigned" | "In Repair" | "Disposed";
export type UserRole = "Super Admin" | "Admin";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  department: string;
  status: "Active" | "Invited";
}

export interface Category {
  id: string;
  name: string;
  code: string;
  assetCount: number;
}

export interface Assignment {
  id: string;
  assetId: string;
  userId: string;
  employeeName: string;
  employeeEmail: string;
  department: string;
  assignedDate: string;
  returnedDate?: string;
  notes: string;
  status: "Active" | "Returned";
}

export interface Asset {
  id: string;
  tag: string;
  name: string;
  category: string;
  brand: string;
  model: string;
  serialNumber: string;
  purchaseDate: string;
  warrantyExpiry: string;
  location: string;
  status: AssetStatus;
  assignedTo?: string;
  notes: string;
  lastUpdated: string;
}

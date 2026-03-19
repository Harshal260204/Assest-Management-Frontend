export const currentUser = {
  name: "Ariana Cole",
  email: "ariana@company.com",
  role: "SUPER ADMIN",
  department: "Executive"
};

export const stats = {
  totalAssets: 248,
  assigned: 163,
  available: 58,
  inRepair: 17,
  disposed: 10
};

export const assets = [
  { id: "a1", tag: "AST-00124", name: "MacBook Pro 14", category: "Laptops", status: "Assigned", assignedTo: "Maya Jordan", location: "HQ • 4th Floor", brand: "Apple", model: "A2992" },
  { id: "a2", tag: "AST-00131", name: "Dell UltraSharp 27", category: "Displays", status: "Available", assignedTo: "—", location: "HQ • Design Bay", brand: "Dell", model: "U2723QE" },
  { id: "a3", tag: "AST-00087", name: "Herman Miller Aeron", category: "Furniture", status: "Assigned", assignedTo: "Leah Smith", location: "HQ • 2nd Floor", brand: "Herman Miller", model: "Size B" },
  { id: "a4", tag: "AST-00177", name: "Logitech MX Keys", category: "Peripherals", status: "Available", assignedTo: "—", location: "Storage • A1", brand: "Logitech", model: "MX Keys S" },
  { id: "a5", tag: "AST-00198", name: "Fluke Digital Multimeter", category: "Digital Instruments", status: "In Repair", assignedTo: "—", location: "Lab • Cabinet 3", brand: "Fluke", model: "117" },
  { id: "a6", tag: "AST-00042", name: "USB-C Docking Station", category: "Peripherals", status: "Disposed", assignedTo: "—", location: "Storage • B4", brand: "Anker", model: "565" }
];

export const assignments = [
  { id: "as1", assetId: "a1", employeeName: "Maya Jordan", employeeEmail: "maya@company.com", department: "HR", assignedDate: "2026-03-14" },
  { id: "as2", assetId: "a3", employeeName: "Leah Smith", employeeEmail: "leah@company.com", department: "Finance", assignedDate: "2026-03-10" },
  { id: "as3", assetId: "a2", employeeName: "Ibrahim Khan", employeeEmail: "ibrahim@company.com", department: "Operations", assignedDate: "2026-03-08" }
];

export const categories = [
  { id: "c1", name: "Laptops", code: "LTP", assetCount: 74 },
  { id: "c2", name: "Displays", code: "DSP", assetCount: 39 },
  { id: "c3", name: "Furniture", code: "FUR", assetCount: 52 },
  { id: "c4", name: "Peripherals", code: "PRP", assetCount: 61 },
  { id: "c5", name: "Digital Instruments", code: "DIG", assetCount: 22 }
];

export const users = [
  { id: "u1", name: "Ariana Cole", email: "ariana@company.com", department: "Executive", role: "Super Admin", status: "Active" },
  { id: "u2", name: "Maya Jordan", email: "maya@company.com", department: "HR", role: "Admin", status: "Active" },
  { id: "u3", name: "Ibrahim Khan", email: "ibrahim@company.com", department: "Operations", role: "Admin", status: "Invited" },
  { id: "u4", name: "Leah Smith", email: "leah@company.com", department: "Finance", role: "Admin", status: "Active" }
];

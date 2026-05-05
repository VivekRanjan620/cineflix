"use client";

import { useState } from "react";
import { Search, MoreHorizontal, ShieldCheck, User } from "lucide-react";

// ── Types (hardcoded here, no external types/ import needed) ──────────────
type UserRole   = "user" | "admin";
type UserStatus = "active" | "suspended";

interface UserRow {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  joinedAt: string;
  totalEarned: number;
  status: UserStatus;
}

// ── Mock data (hardcoded) ─────────────────────────────────────────────────
const MOCK_USERS: UserRow[] = [
  { id: "u1", name: "Rahul Sharma",  email: "rahul@example.com",  role: "user",  joinedAt: "2024-01-15", totalEarned: 1985, status: "active"    },
  { id: "u2", name: "Priya Mehta",   email: "priya@example.com",  role: "user",  joinedAt: "2024-02-20", totalEarned: 840,  status: "active"    },
  { id: "u3", name: "Arjun Singh",   email: "arjun@example.com",  role: "user",  joinedAt: "2024-03-05", totalEarned: 2310, status: "active"    },
  { id: "u4", name: "Sneha Patel",   email: "sneha@example.com",  role: "user",  joinedAt: "2024-03-18", totalEarned: 120,  status: "suspended" },
  { id: "u5", name: "Vikram Rao",    email: "vikram@example.com", role: "user",  joinedAt: "2024-04-01", totalEarned: 560,  status: "active"    },
  { id: "a1", name: "Admin User",    email: "admin@cineflix.com", role: "admin", joinedAt: "2023-06-01", totalEarned: 0,    status: "active"    },
];

// ── Style maps ────────────────────────────────────────────────────────────
const STATUS_STYLE: Record<UserStatus, string> = {
  active:    "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  suspended: "bg-red-500/10    text-red-400    border-red-500/20",
};

const ROLE_STYLE: Record<UserRole, string> = {
  admin: "bg-secondary/10 text-secondary border-secondary/20",
  user:  "bg-white/[0.03] text-muted-foreground border-white/[0.07]",
};

export function UsersTable() {
  const [search, setSearch] = useState("");

  const filtered = MOCK_USERS.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Search bar */}
      <div className="relative mb-5">
        <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 text-sm bg-white/[0.03] border border-white/[0.07] rounded-xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-secondary/40"
        />
      </div>

      {/* Table */}
      <div className="relative rounded-2xl overflow-hidden border border-white/[0.07] backdrop-blur-xl bg-[hsl(230_30%_8%/0.7)]">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/[0.06] bg-white/[0.02]">
                {["User", "Role", "Joined", "Earned (₹)", "Status", ""].map((h, i) => (
                  <th
                    key={i}
                    className={`px-5 py-3 text-[10px] uppercase tracking-wider text-muted-foreground font-medium ${
                      h === "Earned (₹)" ? "text-right" : h === "" ? "text-right" : "text-left"
                    }`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-10 text-muted-foreground text-sm">
                    No users found
                  </td>
                </tr>
              ) : (
                filtered.map((user, i) => (
                  <tr
                    key={user.id}
                    className={`hover:bg-white/[0.02] transition-colors ${
                      i < filtered.length - 1 ? "border-b border-white/[0.05]" : ""
                    }`}
                  >
                    {/* Name + Email */}
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 border border-white/[0.08] flex items-center justify-center text-xs font-semibold text-foreground shrink-0">
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium text-foreground text-xs">{user.name}</p>
                          <p className="text-[10px] text-muted-foreground">{user.email}</p>
                        </div>
                      </div>
                    </td>

                    {/* Role */}
                    <td className="px-5 py-3.5">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium border ${ROLE_STYLE[user.role]}`}>
                        {user.role === "admin"
                          ? <ShieldCheck size={9} />
                          : <User size={9} />
                        }
                        {user.role}
                      </span>
                    </td>

                    {/* Joined */}
                    <td className="px-5 py-3.5 text-muted-foreground text-xs whitespace-nowrap">
                      {new Date(user.joinedAt).toLocaleDateString("en-IN", {
                        day: "numeric", month: "short", year: "numeric",
                      })}
                    </td>

                    {/* Earned */}
                    <td className="px-5 py-3.5 text-right font-semibold text-foreground text-xs">
                      ₹{user.totalEarned.toLocaleString()}
                    </td>

                    {/* Status */}
                    <td className="px-5 py-3.5">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-medium border capitalize ${STATUS_STYLE[user.status]}`}>
                        {user.status}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="px-5 py-3.5 text-right">
                      <button className="text-muted-foreground hover:text-foreground transition-colors p-1 rounded-lg hover:bg-white/[0.05]">
                        <MoreHorizontal size={15} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
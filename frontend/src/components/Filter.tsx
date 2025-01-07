import React from "react";
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function FilterMenu() {
  return (
    <div className="w-64 bg-slate-50 p-6 rounded-lg">
      <div className="space-y-6">
        {/* Category Section */}
        <div className="space-y-4">
          <h2 className="text-base font-medium text-slate-900">Category</h2>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox id="clothes" />
              <Label htmlFor="clothes" className="text-sm text-slate-600">
                Clothes
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="bags" />
              <Label htmlFor="bags" className="text-sm text-slate-600">
                Bags
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="shoes" />
              <Label htmlFor="shoes" className="text-sm text-slate-600">
                Shoes
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="cosmetics" />
              <Label htmlFor="cosmetics" className="text-sm text-slate-600">
                Cosmetics
              </Label>
            </div>
          </div>
        </div>

        {/* Weight Section */}
        <div className="space-y-4">
          <h2 className="text-base font-medium text-slate-900">Weight</h2>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox id="200gm" />
              <Label htmlFor="200gm" className="text-sm text-slate-600">
                200gm Packs
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="500gm" />
              <Label htmlFor="500gm" className="text-sm text-slate-600">
                500gm Packs
              </Label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

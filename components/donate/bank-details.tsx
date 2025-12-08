"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Building, CheckCircle, ChevronDown, ChevronUp, Copy } from "lucide-react"

export function BankDetails() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const bankDetails = {
    accountName: "Blooming Buds Trust",
    bankName: "State Bank of India",
    accountNumber: "00000039953631092",
    ifscCode: "SBIN0000930",
    branch: "Tiruchirapalli Branch",
  }

  const handleCopy = (field: string, value: string) => {
    navigator.clipboard.writeText(value)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }

  return (
    <section className="py-8 md:py-12 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Collapsible Header */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full bg-card rounded-2xl p-4 md:p-6 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Building className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-foreground">Bank Transfer</h3>
                <p className="text-sm text-muted-foreground">Alternative donation method</p>
              </div>
            </div>
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 text-muted-foreground" />
            ) : (
              <ChevronDown className="w-5 h-5 text-muted-foreground" />
            )}
          </button>

          {/* Expanded Content */}
          {isExpanded && (
            <div className="bg-card rounded-2xl p-4 md:p-6 mt-3 shadow-sm animate-in slide-in-from-top-2 duration-200">
              <div className="space-y-4">
                {Object.entries(bankDetails).map(([key, value]) => {
                  const label = key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())

                  return (
                    <div key={key} className="flex items-center justify-between p-3 bg-muted rounded-xl">
                      <div>
                        <div className="text-xs text-muted-foreground">{label}</div>
                        <div className="font-medium text-foreground text-sm md:text-base">{value}</div>
                      </div>
                      <Button variant="ghost" size="sm" onClick={() => handleCopy(key, value)} className="h-8 px-2">
                        {copiedField === key ? (
                          <CheckCircle className="w-4 h-4 text-primary" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  )
                })}
              </div>

              <p className="text-xs text-muted-foreground mt-4 text-center">
                Please include your name and phone number in the transaction remarks for acknowledgment.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

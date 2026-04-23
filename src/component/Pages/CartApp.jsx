import React from 'react'
import HeaderApp from '../Sample/HeaderApp'
import FooterApp from '../Sample/FooterApp'

export default function CartApp() {
  return (
     <>
     <HeaderApp />

     <main className="flex-grow pt-32 pb-xl px-6 max-w-[1280px] mx-auto w-full">
  <header className="mb-lg">
    <h1 className="font-h1 text-h1 text-primary">Your Cart</h1>
    <p className="text-on-surface-variant mt-2 font-body-lg">
      Review your items before proceeding to checkout.
    </p>
  </header>
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
    {/* Cart Items List */}
    <div className="lg:col-span-8 space-y-md">
      {/* Item 1 */}
      <div className="bg-surface-container-lowest p-md rounded-xl shadow-sm hover:shadow-md transition-shadow flex gap-md items-center group">
        <div className="w-32 h-32 rounded-lg overflow-hidden bg-surface-container shrink-0">
          <img
            alt="Aether Pro Tablet"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            data-alt="High-end sleek dark grey tablet computer on a minimalist desk, professional product photography with soft cinematic lighting"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuByPRFC8_XbqzthGjkSlh6rSE-XPuhR0q2AQsKwzlMQ7o681qq7XK5fRRgRddFKsbp4CKH5iBh5z0E3zlme24AjPeN3BNKsVavb9iJa7gL1PhqTdOGRIDFCWB3NdBlYtUU3V0ZlAwu5EIM3LZmeZHZCUi1y5ZCntQaBqKQj2CIrlxywwyCD0ETbufa1MHnOxjl1urpzdP3iPxAb-NKBN3D7eax_O6GoC95QDlD7ntU-Nji8yMbl63gFzQ0CD-eCtoszQ0Lr6XYkMdI"
          />
        </div>
        <div className="flex-grow flex flex-col md:flex-row md:items-center justify-between gap-md">
          <div>
            <h3 className="font-h3 text-h3 text-on-surface">
              Aether Pro Tablet
            </h3>
            <p className="text-label-sm font-label-sm text-on-surface-variant">
              Space Black | 512GB
            </p>
            <button className="mt-4 flex items-center gap-1 text-error text-label-sm font-label-sm hover:opacity-70 transition-opacity">
              <span
                className="material-symbols-outlined text-[18px]"
                data-icon="delete"
              >
                delete
              </span>
              Remove
            </button>
          </div>
          <div className="flex items-center gap-lg">
            <div className="flex items-center border border-outline-variant rounded-lg p-1 bg-surface-container-low">
              <button className="w-8 h-8 flex items-center justify-center text-on-surface hover:bg-surface-variant rounded transition-colors">
                <span
                  className="material-symbols-outlined text-[18px]"
                  data-icon="remove"
                >
                  remove
                </span>
              </button>
              <span className="px-4 font-button text-button">1</span>
              <button className="w-8 h-8 flex items-center justify-center text-on-surface hover:bg-surface-variant rounded transition-colors">
                <span
                  className="material-symbols-outlined text-[18px]"
                  data-icon="add"
                >
                  add
                </span>
              </button>
            </div>
            <div className="text-right">
              <p className="font-h3 text-h3 text-primary">$1,299.00</p>
            </div>
          </div>
        </div>
      </div>
      {/* Item 2 */}
      <div className="bg-surface-container-lowest p-md rounded-xl shadow-sm hover:shadow-md transition-shadow flex gap-md items-center group">
        <div className="w-32 h-32 rounded-lg overflow-hidden bg-surface-container shrink-0">
          <img
            alt="Luxe Sound Over-Ear Headphones"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            data-alt="Premium wireless over-ear headphones in matte teal, studio lighting, soft shadows, professional luxury tech aesthetic"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-HniryDqgPEmyG6fg6KJbf0iqcWvbGX7s19eO2dSXD-oLgHUAj2E1yiQ6KBvpEUU9GQNHXG2H6I-yRR_0laIMfTme-mu9z4S5DWxWiM5y3cKS-TtQnB2HelucGlNaTx9KW3iJYzTtpjxRBQcRygjAVHSvz8NQgu3908VzrObHbk88uVPpc-A6ef8UCh0825szLA3hpzUXl-dr2hw1YnN4gHKmFFPUb-pKtDJ0Jl2Sdzz_DYLQDZfPkjbH2CjFWwfioUhVUaZweV0"
          />
        </div>
        <div className="flex-grow flex flex-col md:flex-row md:items-center justify-between gap-md">
          <div>
            <h3 className="font-h3 text-h3 text-on-surface">
              Luxe Sound Headphones
            </h3>
            <p className="text-label-sm font-label-sm text-on-surface-variant">
              Midnight Teal | Noise Cancelling
            </p>
            <button className="mt-4 flex items-center gap-1 text-error text-label-sm font-label-sm hover:opacity-70 transition-opacity">
              <span
                className="material-symbols-outlined text-[18px]"
                data-icon="delete"
              >
                delete
              </span>
              Remove
            </button>
          </div>
          <div className="flex items-center gap-lg">
            <div className="flex items-center border border-outline-variant rounded-lg p-1 bg-surface-container-low">
              <button className="w-8 h-8 flex items-center justify-center text-on-surface hover:bg-surface-variant rounded transition-colors">
                <span
                  className="material-symbols-outlined text-[18px]"
                  data-icon="remove"
                >
                  remove
                </span>
              </button>
              <span className="px-4 font-button text-button">2</span>
              <button className="w-8 h-8 flex items-center justify-center text-on-surface hover:bg-surface-variant rounded transition-colors">
                <span
                  className="material-symbols-outlined text-[18px]"
                  data-icon="add"
                >
                  add
                </span>
              </button>
            </div>
            <div className="text-right">
              <p className="font-h3 text-h3 text-primary">$698.00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-md">
        <a
          className="inline-flex items-center gap-2 text-secondary font-button text-button hover:gap-3 transition-all"
          href="#"
        >
          <span className="material-symbols-outlined" data-icon="arrow_back">
            arrow_back
          </span>
          Continue Shopping
        </a>
      </div>
    </div>
    {/* Summary Sidebar */}
    <aside className="lg:col-span-4 sticky top-28">
      <div className="bg-surface-container-highest p-md rounded-xl shadow-lg border border-outline-variant/30">
        <h2 className="font-h3 text-h3 text-primary mb-md">Order Summary</h2>
        <div className="space-y-sm pb-md border-b border-outline-variant/30">
          <div className="flex justify-between items-center">
            <span className="text-on-surface-variant font-body-md">
              Subtotal
            </span>
            <span className="text-on-surface font-button">$1,997.00</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-on-surface-variant font-body-md">
              Shipping
            </span>
            <span className="text-on-surface font-body-md">
              Calculated at checkout
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-on-surface-variant font-body-md">
              Estimated Tax
            </span>
            <span className="text-on-surface font-button">$159.76</span>
          </div>
        </div>
        <div className="py-md flex justify-between items-center">
          <span className="font-h3 text-h3 text-primary">Total</span>
          <span className="font-h2 text-h2 text-primary">$2,156.76</span>
        </div>
        <div className="mt-md space-y-3">
          <button className="w-full bg-secondary text-white py-4 rounded-lg font-button text-button shadow-xl shadow-secondary/20 hover:opacity-90 active:scale-[0.98] transition-all">
            Proceed to Checkout
          </button>
          <div className="flex items-center justify-center gap-2 pt-base">
            <span
              className="material-symbols-outlined text-on-surface-variant text-[16px]"
              data-icon="lock"
            >
              lock
            </span>
            <span className="text-label-sm font-label-sm text-on-surface-variant">
              Secure checkout powered by LUXE
            </span>
          </div>
        </div>
        <div className="mt-lg p-sm bg-surface-container-low rounded-lg">
          <div className="flex gap-sm">
            <span
              className="material-symbols-outlined text-secondary"
              data-icon="local_shipping"
            >
              local_shipping
            </span>
            <div>
              <p className="font-label-sm text-label-sm text-on-surface">
                Free Premium Delivery
              </p>
              <p className="text-[12px] text-on-surface-variant">
                On orders above $500.00
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  </div>
</main>



     <FooterApp />
     
     
     </>
  )
}

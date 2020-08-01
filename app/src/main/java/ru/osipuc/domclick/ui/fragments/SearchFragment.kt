package ru.osipuc.domclick.ui.fragments

import android.text.Html
import android.view.LayoutInflater
import android.view.View
import android.widget.EditText
import android.widget.TextView
import androidx.fragment.app.Fragment
import com.google.android.material.bottomsheet.BottomSheetDialog
import kotlinx.android.synthetic.main.bottom_sheet_apartment.*
import kotlinx.android.synthetic.main.bottom_sheet_buy_sell.*
import kotlinx.android.synthetic.main.bottom_sheet_buy_sell.view.*
import kotlinx.android.synthetic.main.fragment_search.*
import ru.osipuc.domclick.R
import ru.osipuc.domclick.utilites.APP_ACTIVITY


class SearchFragment : Fragment(R.layout.fragment_search) {

    private lateinit var iWantBuy: TextView
    private lateinit var appartment: TextView
    private lateinit var address: EditText
    private lateinit var cost: EditText
    private var isCheckedBuySell: Int = 1

    override fun onStart() {
        super.onStart()
        APP_ACTIVITY.navBottom.visibility = View.VISIBLE
        initView()
    }

    private fun initView() {
        iWantBuy = search_fragment_i_want_buy_sell_tv
        setTextBuySell()
        iWantBuy.setOnClickListener {
            showBuySelDialog()
        }

        appartment = search_fragment_apartment_tv
        appartment.setOnClickListener {
            showApartmentDialog()
        }

        address = search_fragment_address_et
        address.setOnClickListener {
            showAddressDialog()
        }

        cost = search_fragment_price_et
        cost.setOnClickListener {
            showCostDialog()
        }
    }

    private fun showApartmentDialog() {
        val bottomSheetBuySell = BottomSheetDialog(
            APP_ACTIVITY,
            R.style.BottomSheetDialogTheme
        )
        val bottomSheetView = LayoutInflater.from(APP_ACTIVITY)
            .inflate(R.layout.bottom_sheet_apartment, bottom_sheet_apartment_container)

        bottomSheetBuySell.setContentView(bottomSheetView)
        bottomSheetBuySell.show()
    }

    private fun showBuySelDialog() {
        val bottomSheetBuySell = BottomSheetDialog(
            APP_ACTIVITY,
            R.style.BottomSheetDialogTheme
        )
        val bottomSheetView = LayoutInflater.from(APP_ACTIVITY)
            .inflate(R.layout.bottom_sheet_buy_sell, bottom_sheet_buy_sell_container)
        setBuySellBottomChecked(bottomSheetView)
        bottomSheetView.bottom_sheet_buy_txt.setOnClickListener {
            isCheckedBuySell = 1
            setBuySellBottomChecked(bottomSheetView)
            setTextBuySell()
            bottomSheetBuySell.dismiss()
        }
        bottomSheetView.bottom_sheet_rent_txt.setOnClickListener {
            isCheckedBuySell = 2
            setBuySellBottomChecked(bottomSheetView)
            setTextBuySell()
            bottomSheetBuySell.dismiss()
        }
        bottomSheetView.bottom_sheet_sell_txt.setOnClickListener {
            isCheckedBuySell = 3
            setBuySellBottomChecked(bottomSheetView)
            setTextBuySell()
            bottomSheetBuySell.dismiss()
        }

        bottomSheetBuySell.setContentView(bottomSheetView)
        bottomSheetBuySell.show()
    }

    private fun showAddressDialog() {
        val bottomSheetAddress = BottomSheetDialog(
            APP_ACTIVITY,
            R.style.BottomSheetDialogTheme
        )

        val bottomSheetView = LayoutInflater.from(APP_ACTIVITY)
            .inflate(R.layout.bottom_sheet_address, bottom_sheet_buy_sell_container)
        bottomSheetAddress.setContentView(bottomSheetView)

        bottomSheetAddress.show()
    }

    private fun showCostDialog() {
        val bottomSheetAddress = BottomSheetDialog(
            APP_ACTIVITY,
            R.style.BottomSheetDialogTheme
        )

        val bottomSheetView = LayoutInflater.from(APP_ACTIVITY)
            .inflate(R.layout.bottom_sheet_cost, bottom_sheet_buy_sell_container)
        bottomSheetAddress.setContentView(bottomSheetView)

        bottomSheetAddress.show()
    }

    private fun setTextBuySell() {
        when (isCheckedBuySell) {
            1 -> iWantBuy.setText(Html.fromHtml(getString(R.string.i_want_buy)))
            2 -> iWantBuy.setText(Html.fromHtml(getString(R.string.i_want_rent)))
            3 -> iWantBuy.setText(Html.fromHtml(getString(R.string.i_want_sell)))
        }
    }

    private fun setBuySellBottomChecked(rootView: View) {
        rootView.bottom_sheet_buy_txt.setCompoundDrawablesWithIntrinsicBounds(0, 0, 0, 0)
        rootView.bottom_sheet_rent_txt.setCompoundDrawablesWithIntrinsicBounds(0, 0, 0, 0)
        rootView.bottom_sheet_sell_txt.setCompoundDrawablesWithIntrinsicBounds(0, 0, 0, 0)
        when (isCheckedBuySell) {
            1 -> rootView.bottom_sheet_buy_txt.setCompoundDrawablesWithIntrinsicBounds(
                0,
                0,
                R.drawable.ic_done,
                0
            )
            2 -> rootView.bottom_sheet_rent_txt.setCompoundDrawablesWithIntrinsicBounds(
                0,
                0,
                R.drawable.ic_done,
                0
            )
            3 -> rootView.bottom_sheet_sell_txt.setCompoundDrawablesWithIntrinsicBounds(
                0,
                0,
                R.drawable.ic_done,
                0
            )
        }
    }

}
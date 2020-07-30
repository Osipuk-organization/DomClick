package ru.osipuc.domclick.ui.fragments

import android.text.Html
import android.view.LayoutInflater
import android.view.View
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

    override fun onStart() {
        super.onStart()
        APP_ACTIVITY.navBottom.visibility = View.VISIBLE
        iWantBuy = search_fragment_i_want_buy_sell_tv
        iWantBuy.setText(Html.fromHtml(getString(R.string.i_want_buy)))
        iWantBuy.setOnClickListener {
            val bottomSheetBuySell = BottomSheetDialog(
                APP_ACTIVITY,
                R.style.BottomSheetDialogTheme)
            val bottomSheetView = LayoutInflater.from(APP_ACTIVITY).inflate(R.layout.bottom_sheet_buy_sell, bottom_sheet_buy_sell_container)
            bottomSheetView.bottom_sheet_buy_chk.setOnClickListener {
                // buy
            }
            bottomSheetBuySell.setContentView(bottomSheetView)
            bottomSheetBuySell.show()
        }

        appartment = search_fragment_arrartment_tv
        appartment.setOnClickListener {
            val bottomSheetBuySell = BottomSheetDialog(
                APP_ACTIVITY,
                R.style.BottomSheetDialogTheme)
            val bottomSheetView = LayoutInflater.from(APP_ACTIVITY).inflate(R.layout.bottom_sheet_apartment, bottom_sheet_apartment_container)

            bottomSheetBuySell.setContentView(bottomSheetView)
            bottomSheetBuySell.show()
        }
    }

}
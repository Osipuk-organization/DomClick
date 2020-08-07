package ru.osipuc.domclick.ui.fragments

import android.view.LayoutInflater
import android.view.View
import android.widget.ImageView
import android.widget.TextView
import androidx.fragment.app.Fragment
import kotlinx.android.synthetic.main.fragment_card_of_apartment.*
import ru.osipuc.domclick.R
import ru.osipuc.domclick.utilites.APP_ACTIVITY

class CardOfApartmentFragment : Fragment(R.layout.fragment_card_of_apartment) {

    override fun onStart() {
        super.onStart()
        APP_ACTIVITY.navBottom.visibility = View.GONE
    }

    override fun onResume() {
        super.onResume()
        addRows(R.drawable.ic_geo, "Адрес", null)
        addRows(null, "Адрес и дом и улица - город тут не нужен", null)
        addRows(R.drawable.ic_m2, "Квадратура", null)
        addRows(null, "Комната", "18м2")

        addRows("Купить в Ипотеку")
    }

    private fun addRows(imageResources: Int?, textStartString: String?, textEndString: String?){
        val layoutInflater = LayoutInflater.from(context).inflate(R.layout.layout_inner_in_fragment_card, null ,false)
        val image = layoutInflater.findViewById<ImageView>(R.id.image_view_inner)
        val textStart =  layoutInflater.findViewById<TextView>(R.id.text_start_main_inner)
        val textEnd = layoutInflater.findViewById<TextView>(R.id.text_end_main_inner)
        if (imageResources != null) image.setImageResource(imageResources)
        if (textStartString != null) textStart.text = textStartString
        if (textEndString != null) textEnd.text = textEndString
        val lineLayoutMain = linear_layout_main
        lineLayoutMain.addView(layoutInflater)
    }

    private fun addRows(textString: String?){
        val layoutInflater = LayoutInflater.from(context).inflate(R.layout.layout_inner_add_in_fragment_card, null ,false)
        val image = layoutInflater.findViewById<ImageView>(R.id.image_add)
        val text =  layoutInflater.findViewById<TextView>(R.id.text_add)
        image.setImageResource(R.drawable.ic_arrow_right)
        if (textString != null) text.text = textString
        val lineLayoutMain = linear_layout_main
        lineLayoutMain.addView(layoutInflater)
    }
}
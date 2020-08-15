package ru.osipuc.domclick.ui.fragments.cardOfApartmentFragment

import android.view.LayoutInflater
import android.widget.ImageView
import android.widget.TextView
import androidx.fragment.app.Fragment
import com.google.android.material.tabs.TabLayoutMediator
import kotlinx.android.synthetic.main.fragment_card_of_apartment.*
import ru.osipuc.domclick.R

class CardOfApartmentFragment : Fragment(R.layout.fragment_card_of_apartment) {

    override fun onResume() {
        super.onResume()
        val vp = viewPager2
        vp.adapter = AdapterCardForImage(testInfo2())
        TabLayoutMediator(tabViewPager, vp) { tab, position -> }.attach()
        testInfo()
    }

    private fun testInfo2(): IntArray = intArrayOf(
        android.R.color.black,
        android.R.color.holo_green_light,
        android.R.color.holo_orange_light,
        android.R.color.holo_red_light
    )

    private fun testInfo() {
        addRows(R.drawable.ic_geo, "Адрес", null)
        addRows(null, "Адрес и дом и улица - город тут не нужен", null)
        addRows(R.drawable.ic_m2, "Квадратура", null)
        addRows(null, "Комната", "18м2")
        addRows("Купить в Ипотеку")
    }

    private fun addRows(imageResources: Int?, textStartString: String?, textEndString: String?) {
        val layoutInflater = LayoutInflater.from(context)
            .inflate(R.layout.layout_inner_in_fragment_card, null, false)
        val image = layoutInflater.findViewById<ImageView>(R.id.image_view_inner)
        val textStart = layoutInflater.findViewById<TextView>(R.id.text_start_main_inner)
        val textEnd = layoutInflater.findViewById<TextView>(R.id.text_end_main_inner)
        imageResources?.let { image.setImageResource(imageResources) }
        textStartString.let { textStart.text = textStartString }
        textEndString.let { textEnd.text = textEndString }
        val lineLayoutMain = linear_layout_main
        lineLayoutMain.addView(layoutInflater)
    }

    private fun addRows(textString: String?) {
        val layoutInflater = LayoutInflater.from(context)
            .inflate(R.layout.layout_inner_add_in_fragment_card, null, false)
        val image = layoutInflater.findViewById<ImageView>(R.id.image_add)
        val text = layoutInflater.findViewById<TextView>(R.id.text_add)
        image.setImageResource(R.drawable.ic_arrow_right)
        textString.let { text.text = textString }
        val lineLayoutMain = linear_layout_main
        lineLayoutMain.addView(layoutInflater)
    }
}
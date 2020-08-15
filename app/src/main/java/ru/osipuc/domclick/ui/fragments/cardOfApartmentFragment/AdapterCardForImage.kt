package ru.osipuc.domclick.ui.fragments.cardOfApartmentFragment

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import kotlinx.android.synthetic.main.item_image_for_card.view.*
import ru.osipuc.domclick.R

class AdapterCardForImage(private val colors: IntArray) :
    RecyclerView.Adapter<AdapterCardForImage.PagerVH>() {
    class PagerVH(itemView: View) : RecyclerView.ViewHolder(itemView)

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): PagerVH =
        PagerVH(
            LayoutInflater.from(parent.context).inflate(R.layout.item_image_for_card, parent, false)
        )

    override fun getItemCount(): Int = colors.size

    override fun onBindViewHolder(holder: PagerVH, position: Int) {
        holder.itemView.run { image_for_card.setImageResource(colors[position]) }
    }


}
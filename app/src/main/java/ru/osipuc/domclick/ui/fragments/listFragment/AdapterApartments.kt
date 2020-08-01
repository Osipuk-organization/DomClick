package ru.osipuc.domclick.ui.fragments.listFragment

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import ru.osipuc.domclick.R
import ru.osipuc.domclick.ui.fragments.CardOfApartmentFragment
import ru.osipuc.domclick.utilites.replaceFragment
import ru.osipuc.domclick.utilites.showToast

class AdapterApartments() : RecyclerView.Adapter<AdapterApartments.ViewHolderApartments>(), View.OnClickListener {
    class ViewHolderApartments(itemView: View) : RecyclerView.ViewHolder(itemView){
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolderApartments {
        val view = LayoutInflater.from(parent.context)
            .inflate(R.layout.item_apartment, parent, false)
        return ViewHolderApartments(
            view
        )
    }

    override fun getItemCount() = 20

    override fun onBindViewHolder(holder: ViewHolderApartments, position: Int) {
        holder.itemView.tag = position
        holder.itemView.setOnClickListener(this)
    }

    override fun onClick(p0: View?) {
        showToast(p0?.id.toString() + " " + p0?.getTag())
        replaceFragment(CardOfApartmentFragment())
    }
}
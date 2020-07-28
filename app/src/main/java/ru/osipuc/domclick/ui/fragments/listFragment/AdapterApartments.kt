package ru.osipuc.domclick.ui.fragments.listFragment

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import ru.osipuc.domclick.R

class AdapterApartments() : RecyclerView.Adapter<AdapterApartments.ViewHolderApartments>() {
    class ViewHolderApartments(view : View) : RecyclerView.ViewHolder(view){

    }
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolderApartments {
        val view = LayoutInflater.from(parent.context)
            .inflate(R.layout.item_apartment, parent, false)
        return ViewHolderApartments(
            view
        );
    }

    override fun getItemCount() = 20

    override fun onBindViewHolder(holder: ViewHolderApartments, position: Int) {
    }
}
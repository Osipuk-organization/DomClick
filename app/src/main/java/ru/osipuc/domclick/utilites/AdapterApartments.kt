package ru.osipuc.domclick.utilites

import android.text.Layout
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import kotlinx.android.extensions.LayoutContainer
import kotlinx.android.synthetic.main.item_apartment.view.*
import ru.osipuc.domclick.R

class AdapterApartments() : RecyclerView.Adapter<AdapterApartments.ViewHolderApartments>() {
    class ViewHolderApartments(view : View) : RecyclerView.ViewHolder(view){

    }
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolderApartments {
        val view = LayoutInflater.from(parent.context)
            .inflate(R.layout.item_apartment, parent, false)
        return ViewHolderApartments(view);
    }

    override fun getItemCount() = 20

    override fun onBindViewHolder(holder: ViewHolderApartments, position: Int) {
    }
}
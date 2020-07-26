package ru.osipuc.domclick.ui.fragments

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import kotlinx.android.synthetic.main.fragment_main.*
import ru.osipuc.domclick.R
import ru.osipuc.domclick.R.id.apartment_recycler_view
import ru.osipuc.domclick.utilites.APP_ACTIVITY
import ru.osipuc.domclick.utilites.AdapterApartments


class SearchFragment : Fragment(R.layout.fragment_main) {

    private lateinit var recyclerView: RecyclerView
    private lateinit var viewAdapter: RecyclerView.Adapter<*>
    private lateinit var viewManager: RecyclerView.LayoutManager

    override fun onStart() {
        super.onStart()
        APP_ACTIVITY.navBottom.visibility = View.VISIBLE
    }

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?
    ): View? {
        val rootView = inflater.inflate(R.layout.fragment_main, container, false)
        viewManager = LinearLayoutManager(activity)
        viewAdapter = AdapterApartments()
        recyclerView = rootView.findViewById<RecyclerView>(R.id.apartment_recycler_view).apply {
            setHasFixedSize(true)
            layoutManager = viewManager
            adapter = viewAdapter
        }
        return rootView
    }
}
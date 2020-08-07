package ru.osipuc.domclick.ui.fragments.listFragment

import androidx.fragment.app.Fragment
import androidx.recyclerview.widget.RecyclerView
import kotlinx.android.synthetic.main.fragment_list.*
import ru.osipuc.domclick.R


class ListFragment : Fragment(R.layout.fragment_list) {

    private lateinit var mRecyclerView: RecyclerView
    private lateinit var mAdapter: AdapterApartments


    override fun onResume() {
        super.onResume()
        mAdapter = AdapterApartments()
        mRecyclerView = apartment_recycler_view.apply {
            adapter = mAdapter
            setHasFixedSize(true)
        }
    }

}
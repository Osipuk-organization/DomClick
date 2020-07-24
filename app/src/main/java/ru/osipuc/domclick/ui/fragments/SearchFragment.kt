package ru.osipuc.domclick.ui.fragments

import android.view.View
import androidx.fragment.app.Fragment
import ru.osipuc.domclick.R
import ru.osipuc.domclick.utilites.APP_ACTIVITY


class SearchFragment : Fragment(R.layout.fragment_main) {

    override fun onStart() {
        super.onStart()
        APP_ACTIVITY.navBottom.visibility = View.VISIBLE
    }

}
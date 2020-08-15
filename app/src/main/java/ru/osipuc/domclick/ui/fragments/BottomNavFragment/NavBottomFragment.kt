package ru.osipuc.domclick.ui.fragments.BottomNavFragment

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.navigation.Navigation
import androidx.navigation.ui.setupWithNavController
import kotlinx.android.synthetic.main.fragment_nav_bottom.*
import ru.osipuc.domclick.R
import ru.osipuc.domclick.utilites.APP_ACTIVITY

class NavBottomFragment : Fragment(R.layout.fragment_nav_bottom) {

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_nav_bottom, container, false)
    }

    override fun onResume() {
        super.onResume()

        val navController = Navigation.findNavController(APP_ACTIVITY, R.id.botton_nav_host_fragment)
        bottom_navigation.setupWithNavController(navController)
    }

}